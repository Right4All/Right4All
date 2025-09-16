import express from 'express'
import { db } from '../services/databaseService'

const router = express.Router()

// Get all organizations/NGOs
router.get('/organizations', async (req, res) => {
  try {
    const { category, search } = req.query
    let rows = await db.getOrganizationsData()

    // Filter by category if provided
    if (category && category !== 'All Help') {
      rows = rows.filter(org =>
        org.service_type?.toLowerCase().includes((category as string).toLowerCase())
      )
    }

    // Filter by search term if provided
    if (search) {
      const searchTerm = (search as string).toLowerCase()
      rows = rows.filter(org =>
        org.org_name?.toLowerCase().includes(searchTerm) ||
        org.org_en?.toLowerCase().includes(searchTerm) ||
        org.org_descr_en?.toLowerCase().includes(searchTerm) ||
        org.service_type?.toLowerCase().includes(searchTerm) ||
        org.org_address?.toLowerCase().includes(searchTerm) ||
        org.org_state?.toLowerCase().includes(searchTerm)
      )
    }

    res.json({ organizations: rows })
  } catch (error) {
    console.error('Organizations endpoint error:', error)
    res.status(500).json({
      error: 'Failed to fetch organizations data',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// Get all survivor stories
router.get('/stories', async (req, res) => {
  try {
    const { category, search } = req.query
    let rows = await db.getSurvivorStoriesData()

    // Filter by category if provided
    if (category && category !== 'All Stories') {
      rows = rows.filter(story =>
        story.theme?.toLowerCase().includes((category as string).toLowerCase())
      )
    }

    // Filter by search term if provided
    if (search) {
      const searchTerm = (search as string).toLowerCase()
      rows = rows.filter(story =>
        story.story_title_en?.toLowerCase().includes(searchTerm) ||
        story.story_body_en?.toLowerCase().includes(searchTerm) ||
        story.theme?.toLowerCase().includes(searchTerm) ||
        story.tips_or_lesson?.toLowerCase().includes(searchTerm)
      )
    }

    res.json({ stories: rows })
  } catch (error) {
    console.error('Stories endpoint error:', error)
    res.status(500).json({
      error: 'Failed to fetch stories data',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// Get all practical guides/resources
router.get('/resources', async (req, res) => {
  try {
    const { category, search } = req.query
    let rows = await db.getPracticalGuidesData()

    // Filter by category if provided
    if (category && category !== 'All Resources') {
      rows = rows.filter(guide =>
        guide.category_name?.toLowerCase().includes((category as string).toLowerCase())
      )
    }

    // Filter by search term if provided
    if (search) {
      const searchTerm = (search as string).toLowerCase()
      rows = rows.filter(guide =>
        guide.guide_topic_name?.toLowerCase().includes(searchTerm) ||
        guide.guide_summary?.toLowerCase().includes(searchTerm) ||
        guide.guide_who_is_this_for?.toLowerCase().includes(searchTerm) ||
        guide.guide_steps?.toLowerCase().includes(searchTerm) ||
        guide.category_name?.toLowerCase().includes(searchTerm)
      )
    }

    res.json({ resources: rows })
  } catch (error) {
    console.error('Resources endpoint error:', error)
    res.status(500).json({
      error: 'Failed to fetch resources data',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// Get specific organization by ID
router.get('/organizations/:id', async (req, res) => {
  try {
    const { id } = req.params
    const query = `
      SELECT *
      FROM organization
      WHERE org_id = $1
    `
    const result = await db.query(query, [id])

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Organization not found' })
    }

    res.json(result.rows[0])
  } catch (error) {
    console.error('Organization detail endpoint error:', error)
    res.status(500).json({
      error: 'Failed to fetch organization data',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// Get community stats for dashboard
router.get('/stats', async (req, res) => {
  try {
    const [orgResult, storyResult, resourceResult] = await Promise.all([
      db.query('SELECT COUNT(*) as count FROM organization'),
      db.query('SELECT COUNT(*) as count FROM survivor_story'),
      db.query('SELECT COUNT(*) as count FROM comm_practical_guide')
    ])

    res.json({
      organizations: orgResult.rows[0]?.count || 0,
      stories: storyResult.rows[0]?.count || 0,
      resources: resourceResult.rows[0]?.count || 0
    })
  } catch (error) {
    console.error('Community stats endpoint error:', error)
    res.status(500).json({
      error: 'Failed to fetch community stats',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router