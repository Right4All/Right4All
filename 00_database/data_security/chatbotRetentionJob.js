/**
 * chatbotRetentionJob.js
 *
 * Enforces 90-day (or configurable) retention for the table `chatbot_conversations`.
 * - Ensures an index on created_at (for fast pruning)
 * - Deletes rows older than RETENTION_DAYS
 * - Writes an audit log entry with the deleted row count and runtime
 * - Schedules itself to run daily at 02:30 Asia/Kuala_Lumpur
 *
 * Owner: Backend Team
 * Note: Requires environment variables DATABASE_URL and optionally RETENTION_DAYS.
 */

// add inside .env file for configuration
// RETENTION_DAYS=90



const { Pool } = require('pg');
const cron = require('node-cron');
require('dotenv').config();

// ---- Configuration ---------------------------------------------------------

// Neon connection string. Example in .env:
// DATABASE_URL=postgresql://user:password@host:port/neondb?sslmode=require
const DATABASE_URL = process.env.DATABASE_URL;

// Retention window in days (default 90)
const RETENTION_DAYS = parseInt(process.env.RETENTION_DAYS || '90', 10);

// If set to "1", the job also runs immediately on startup (useful for testing)
const RUN_ON_START = process.env.RUN_ON_START === '1';

// ---- Database pool ---------------------------------------------------------

if (!DATABASE_URL) {
  console.error('ERROR: DATABASE_URL is not set. Add it to your .env file.');
  process.exit(1);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  // Neon requires SSL; disable CA verification so pg can negotiate correctly
  ssl: { rejectUnauthorized: false }
});

// ---- Helpers ---------------------------------------------------------------

/**
 * Ensures supporting objects exist:
 * - Index on chatbot_conversations.created_at
 * - A lightweight audit table to prove retention compliance
 */
async function ensureSchema(client) {
  await client.query(`
    CREATE INDEX IF NOT EXISTS ix_chatbot_conversations_created_at
    ON chatbot_conversations (created_at);
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS retention_audit_log (
      id            BIGSERIAL PRIMARY KEY,
      job_name      TEXT NOT NULL,
      deleted_count INTEGER NOT NULL,
      retention_days INTEGER NOT NULL,
      ran_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}

/**
 * Deletes rows older than RETENTION_DAYS and records an audit entry.
 */
async function pruneConversations() {
  const client = await pool.connect();
  try {
    console.log(`[Retention] Starting cleanup (older than ${RETENTION_DAYS} days)...`);

    // Prepare schema (index + audit table)
    await ensureSchema(client);

    // Perform deletion using a parameterised interval
    const { rowCount } = await client.query(
      `DELETE FROM chatbot_conversations
       WHERE created_at < NOW() - ($1 || ' days')::interval;`,
      [RETENTION_DAYS]
    );

    // Write audit entry
    await client.query(
      `INSERT INTO retention_audit_log (job_name, deleted_count, retention_days)
       VALUES ($1, $2, $3);`,
      ['chatbot_conversations_90d_prune', rowCount, RETENTION_DAYS]
    );

    console.log(`[Retention] Deleted ${rowCount} rows; audit logged.`);
  } catch (err) {
    console.error('[Retention] Error during cleanup:', err);
  } finally {
    client.release();
  }
}

// ---- Scheduler -------------------------------------------------------------

/**
 * Schedules the job to run daily at 02:30 AM Malaysia time.
 * Cron format: minute hour day-of-month month day-of-week
 */
cron.schedule('30 2 * * *', pruneConversations, {
  timezone: 'Asia/Kuala_Lumpur'
});

console.log('[Retention] Daily job scheduled for 02:30 Asia/Kuala_Lumpur.');

// Optionally run once on startup (use RUN_ON_START=1 in .env for testing)
if (RUN_ON_START) {
  pruneConversations().then(() => {
    console.log('[Retention] One-off run completed on startup.');
  });
}

// Keep the process alive if this file is run as a standalone worker
// If you integrate into an existing server, you can remove the following:
process.stdin.resume();

// save to /server/chatbotRetentionJob.js 
// so that it can be run as a standalone script or integrated into server startup.

// ---- Instructions to run ---------------------------------------------------

// # 1. run in terminal locally
// npm install pg node-cron dotenv
// example output: 
// added 30 packages, and audited 30 packages in 2s

// # 2. run the job manually for testing locally
// node chatbotRetentionJob.js
// # example logs 
// # [Retention] Starting cleanup (older than 90 days)...
// # [Retention] Deleted 0 rows; audit logged.
// # [Retention] Daily job scheduled for 02:30 Asia/Kuala_Lumpur.

// # 3. deploy to production server so that 
// # The script connects to database using the .env DATABASE_URL.
// # It ensures an index on chatbot_conversations.created_at (if not already there).
// # It deletes all records older than RETENTION_DAYS (90 days).
// # It writes a row into a small retention_audit_log table each time it runs.
// # It runs every day at 02:30 AM (Malaysia time) automatically.
// # If want to test immediately, backend can temporarily set RUN_ON_START=1 in .env.