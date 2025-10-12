import { pipeline } from '@xenova/transformers'

interface EmbeddingResponse {
  embedding: number[]
  model: string
  tokens: number
}

class EmbeddingService {
  private model = 'Xenova/multilingual-e5-small' // 384 dimensions, multilingual support
  private extractor: any = null
  private isInitialized = false
  private initPromise: Promise<void> | null = null

  constructor() {
    console.log('🤖 Using local embedding model (no API key needed!)')
  }

  /**
   * Initialize the local embedding model (lazy loading)
   */
  private async initialize(): Promise<void> {
    // If already initialized, return
    if (this.isInitialized) {
      return
    }

    // If initialization is in progress, wait for it
    if (this.initPromise) {
      return this.initPromise
    }

    // Start initialization
    this.initPromise = (async () => {
      try {
        console.log('📥 Loading local embedding model (first time only, ~50MB)...')
        this.extractor = await pipeline('feature-extraction', this.model)
        this.isInitialized = true
        console.log('✅ Local embedding model loaded successfully!')
      } catch (error: any) {
        console.error('❌ Failed to load embedding model:', error.message)
        throw new Error(`Failed to initialize embedding model: ${error.message}`)
      }
    })()

    return this.initPromise
  }

  /**
   * Generate embedding for a single text
   */
  async generateEmbedding(text: string): Promise<EmbeddingResponse> {
    // Ensure model is loaded
    await this.initialize()

    if (!this.extractor) {
      throw new Error('Embedding model not initialized')
    }

    // Clean text
    const cleanedText = this.cleanText(text)

    try {
      // Generate embedding
      const output = await this.extractor(cleanedText, {
        pooling: 'mean',
        normalize: true
      })

      // Extract the embedding array with proper typing
      const embedding = Array.from(output.data) as number[]

      return {
        embedding,
        model: this.model,
        tokens: cleanedText.split(/\s+/).length // Rough estimate
      }
    } catch (error: any) {
      console.error('Embedding generation error:', error.message)
      throw new Error(`Failed to generate embedding: ${error.message}`)
    }
  }

  /**
   * Generate embeddings for multiple texts (batch processing)
   */
  async generateEmbeddings(texts: string[]): Promise<number[][]> {
    // Ensure model is loaded
    await this.initialize()

    if (!this.extractor) {
      throw new Error('Embedding model not initialized')
    }

    // Process in smaller batches to avoid memory issues
    const batchSize = 10
    const embeddings: number[][] = []

    for (let i = 0; i < texts.length; i += batchSize) {
      const batch = texts.slice(i, i + batchSize)
      const cleanedBatch = batch.map(text => this.cleanText(text))

      try {
        // Generate embeddings for batch
        for (const text of cleanedBatch) {
          const output = await this.extractor(text, {
            pooling: 'mean',
            normalize: true
          })
          embeddings.push(Array.from(output.data) as number[])
        }

        console.log(`✅ Generated embeddings for batch ${Math.floor(i / batchSize) + 1} (${batch.length} items)`)

        // Small delay to prevent overload
        if (i + batchSize < texts.length) {
          await this.sleep(100)
        }
      } catch (error: any) {
        console.error(`Failed to generate embeddings for batch starting at index ${i}:`, error.message)
        throw error
      }
    }

    return embeddings
  }

  /**
   * Clean text for embedding generation
   */
  private cleanText(text: string): string {
    return text
      .trim()
      .replace(/\s+/g, ' ') // Normalize whitespace
      .slice(0, 8000) // Rough token limit (OpenAI limit is 8191 tokens)
  }

  /**
   * Sleep utility for retry delays
   */
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  /**
   * Calculate cosine similarity between two vectors
   */
  cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) {
      throw new Error('Vectors must have the same length')
    }

    let dotProduct = 0
    let normA = 0
    let normB = 0

    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i]
      normA += a[i] * a[i]
      normB += b[i] * b[i]
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
  }
}

export const embeddingService = new EmbeddingService()
