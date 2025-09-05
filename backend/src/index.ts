import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import translationRouter from './routes/translation'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})