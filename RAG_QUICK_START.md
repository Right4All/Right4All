# RAG Quick Start - 5 Minute Setup

## What is RAG?

**RAG = Retrieval-Augmented Generation**

Instead of basic keyword matching (`ILIKE '%overtime%'`), RAG uses semantic vector embeddings to understand **meaning**.

### Example:
- **Question:** "How much extra money for working late?"
- **Old system:** ❌ No results (missing keyword "overtime")
- **RAG system:** ✅ Finds overtime documents (understands semantic meaning)

---

## Quick Setup (5 steps)

### 1️⃣ Get OpenAI API Key
```bash
# Go to: https://platform.openai.com/api-keys
# Create new key and copy it
```

### 2️⃣ Add to .env
```bash
# backend/.env
OPENAI_API_KEY=sk-your-key-here
```

### 3️⃣ Run SQL in NeonDB Console
```bash
# Copy all content from: backend/src/db/setup-pgvector.sql
# Paste in NeonDB SQL Editor and run
```

### 4️⃣ Generate Embeddings
```bash
cd backend
npx tsx src/scripts/generate-embeddings.ts
# Takes 2-5 minutes
```

### 5️⃣ Start Backend
```bash
npm run dev
```

---

## Test It

```bash
# Test semantic understanding
curl -X POST http://localhost:5000/api/chatbot/chat \
  -H "Content-Type: application/json" \
  -d '{
    "question": "extra pay for working extra hours",
    "language": "en"
  }'
```

Should return overtime information even without using the word "overtime"!

---

## Verify

```sql
-- Check embeddings in NeonDB
SELECT COUNT(*) FROM rights_guide WHERE embedding IS NOT NULL;
-- Should return your total row count
```

---

## How It Works

```
Question → Generate Embedding → Vector Search → Get Context → LLM Response
           (OpenAI)             (pgvector)      (NeonDB)     (DeepSeek)
```

**Before:** ILIKE text matching (exact keywords only)
**After:** Vector similarity (semantic understanding)

---

## Cost

- **Setup:** ~$0.02 one-time
- **Per query:** ~$0.00001 (less than a penny per 1000 queries!)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "pgvector not found" | Re-run setup-pgvector.sql in NeonDB |
| "OPENAI_API_KEY not configured" | Check .env file, restart server |
| No results | Lower similarity threshold in chatbotService.ts:75 |

---

## What Changed in Code

**backend/src/services/chatbotService.ts:**
- ✅ Added `searchDatabaseRAG()` - semantic search
- ✅ Kept `fallbackKeywordSearch()` - backup if RAG fails
- ✅ Imports embeddingService

**New files:**
- `backend/src/services/embeddingService.ts` - OpenAI integration
- `backend/src/scripts/generate-embeddings.ts` - Migration tool
- `backend/src/db/setup-pgvector.sql` - Database setup

---

**Full guide:** See `RAG_SETUP_GUIDE.md` for detailed explanation.
