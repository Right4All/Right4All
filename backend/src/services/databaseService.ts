import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

// Create PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: 10, // Maximum number of clients in pool
  idleTimeoutMillis: 60000, // Close idle clients after 60 seconds
  connectionTimeoutMillis: 30000, // Return error after 30 seconds if connection could not be established
})

// Handle pool errors
pool.on('error', (err) => {
  console.error('Database pool error:', err)
})

export class DatabaseService {
  private pool: Pool

  constructor() {
    this.pool = pool
  }

  // Test database connection
  async testConnection(): Promise<boolean> {
    try {
      const client = await this.pool.connect()
      const result = await client.query('SELECT NOW()')
      client.release()
      console.log('✅ Database connected successfully at:', result.rows[0].now)
      return true
    } catch (error) {
      console.error('❌ Database connection failed:', error)
      return false
    }
  }

  // Execute a query
  async query(text: string, params?: any[]): Promise<any> {
    const start = Date.now()
    try {
      const result = await this.pool.query(text, params)
      const duration = Date.now() - start
      if (process.env.NODE_ENV === 'development') {
        console.log('Query executed', { duration, rows: result.rowCount })
      }
      return result
    } catch (error: any) {
      const duration = Date.now() - start
      console.error('Query failed', { duration, error: error.message })
      throw error
    }
  }

  // Get all states data
  async getStatesData(): Promise<any[]> {
    const query = `
      SELECT 
        state_code,
        state_name_en,
        migrant_number,
        risk_level,
        manuf_perc_in_state,
        const_perc_in_state,
        agric_percent_in_state
      FROM v_state_overview 
      ORDER BY state_code
    `
    const result = await this.query(query)
    return result.rows
  }

  // Get all sectors data
  async getSectorsData(): Promise<any[]> {
    const query = `
      SELECT 
        sector_id,
        sector_name,
        sector_description as description,
        total_accidents_2023,
        accident_risk_level,
        "2001_perc",
        "2005_perc", 
        "2010_perc",
        "2015_perc",
        "2020_perc",
        "2023_perc"
      FROM v_sector_overview
      ORDER BY sector_id
    `
    const result = await this.query(query)
    return result.rows
  }

  // Get all nationalities data
  async getNationalitiesData(): Promise<any[]> {
    const query = `
      SELECT 
        dn.nationality_id,
        dn.nationality_name_en,
        dn.nationality_iso_code,
        mn.nationality_number
      FROM dim_nationality dn
      INNER JOIN migrant_by_nationality mn ON dn.nationality_id = mn.nationality_id
      WHERE mn.nationality_number IS NOT NULL AND mn.nationality_number > 0
      ORDER BY mn.nationality_number DESC
    `
    const result = await this.query(query)
    return result.rows
  }

  // Get overview/summary data
  async getOverviewData(): Promise<any> {
    const query = `
      SELECT 
        total_migrant_worker,
        year
      FROM migrant_summary
      ORDER BY year DESC
      LIMIT 1
    `
    const result = await this.query(query)
    return {
      summary: result.rows[0] || { total_migrant_worker: 0, year: new Date().getFullYear() },
      ts: new Date().toISOString()
    }
  }

  // Close the pool (for graceful shutdown)
  async close(): Promise<void> {
    await this.pool.end()
    console.log('Database pool closed')
  }
}

// Export singleton instance
export const db = new DatabaseService()