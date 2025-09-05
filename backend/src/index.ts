import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import translationRouter from './routes/translation'
import insightsRouter from './routes/insights'
import { db } from './services/databaseService'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Test database connection on startup
async function initializeDatabase() {
  const isConnected = await db.testConnection()
  if (!isConnected) {
    console.error('❌ Failed to connect to database')
    process.exit(1)
  }
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'right4all-backend',
    time: new Date().toISOString()
  })
})

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Right4All Backend API' })
})

// Translation routes
app.use('/api/translation', translationRouter)

// Insights routes (labor market data from Neon database)
app.use('/api/insights', insightsRouter)

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down server...')
  await db.close()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down server...')
  await db.close()
  process.exit(0)
})

// Start server
async function startServer() {
  await initializeDatabase()
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
    console.log(`📊 Labor Market API: http://localhost:${PORT}/api/insights/`)
    console.log(`🌐 Translation API: http://localhost:${PORT}/api/translation/`)
  })
}

startServer().catch(console.error)
