# Right4All AI Chatbot Documentation

## Overview

The Right4All AI Chatbot is a multilingual assistant designed to help Malaysian migrant workers with questions about their rights, wages, working hours, and employment laws. It uses a **Hybrid Balanced RAG (Retrieval-Augmented Generation)** approach combining database knowledge with DeepSeek AI.

---

## Features

✅ **Hybrid Knowledge Mode**
- Retrieves verified data from PostgreSQL database first (RAG)
- Falls back to DeepSeek AI for general migrant worker topics
- 3-second timeout on database queries
- Politely refuses off-topic questions

✅ **Multilingual Support**
- English (en)
- Bahasa Malaysia (ms)
- Nepali (ne)
- Hindi (hi)
- Bengali (bn)

✅ **Voice Input (STT)**
- English-only speech-to-text using Web Speech API
- Click microphone icon to activate

✅ **Wage Calculator**
- Step-by-step wage and overtime calculations
- Transparent formulas with legal citations
- Based on Malaysian Employment Act 1955

✅ **Popup Chat Widget**
- Available on every page
- Floating button in bottom-right corner
- Persistent across navigation

---

## Architecture

### Backend (Node.js + Express)

**Files:**
- `backend/src/services/chatbotService.ts` - Core chatbot logic with DeepSeek API integration
- `backend/src/routes/chatbot.ts` - API routes for chat and wage calculation
- `backend/src/db/schema.sql` - Database schema with sample data

**Key Endpoints:**
- `POST /api/chatbot/chat` - Send message to chatbot
- `POST /api/chatbot/wage/check` - Calculate wages
- `GET /api/chatbot/starter-questions` - Get starter questions by language
- `GET /api/chatbot/health` - Health check

### Frontend (React + TypeScript + Vite)

**Files:**
- `frontend/src/components/Chatbot/ChatWidget.tsx` - Main chat UI component
- `frontend/src/hooks/useChatbot.ts` - React hook for chatbot logic
- `frontend/src/services/chatbotAPI.ts` - API client for chatbot endpoints

---

## Setup Instructions

### 1. Database Setup

Run the schema to create required tables:

```bash
cd backend
psql -U your_username -d right4all -f src/db/schema.sql
```

This creates the following tables:
- `rights_guide` - Q&A about worker rights
- `employment_laws` - Malaysian employment laws
- `faq` - Frequently asked questions
- `wage_rules` - Wage calculation rules
- `chatbot_conversations` - Conversation logs for analytics

### 2. Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Add your DeepSeek API key:

```
DEEPSEEK_API_KEY=your_actual_api_key_here
DATABASE_URL=postgresql://username:password@localhost:5432/right4all
PORT=3000
```

### 3. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 4. Run the Application

**Development mode:**

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

The chatbot widget will appear on all pages.

---

## How It Works

### Hybrid Balanced Flow

```
User Query
   ↓
1. Scope Check
   - Is this about migrant workers/labour rights?
   - If NO → Return off-topic message
   ↓
2. Database Search (with 3-second timeout)
   - Search rights_guide, faq, employment_laws tables
   - Use ILIKE for flexible matching
   ↓
3. Build Prompt
   - System: Instructions + language
   - Context: Database results (if any)
   - User: Question
   ↓
4. DeepSeek API Call
   - Model: deepseek-chat
   - Temperature: 0.7
   - Max tokens: 500
   ↓
5. Response
   - Answer (in selected language)
   - Source type (database/general/off-topic)
   - Citations [ref:ID] if from database
```

### Wage Calculator

Formula based on Employment Act 1955:

```
Daily wage = Monthly salary ÷ 26
Hourly wage = Daily wage ÷ 8
Overtime rate = Hourly wage × 1.5
Total OT pay = Overtime rate × Hours
```

Example:
```json
{
  "monthly": 2600,
  "otHours": 4
}

Response:
{
  "steps": [
    "Daily wage = RM 2600 ÷ 26 = RM 100.00",
    "Hourly wage = RM 100.00 ÷ 8 = RM 12.50",
    "Overtime rate = RM 12.50 × 1.5 = RM 18.75",
    "Total overtime pay = RM 18.75 × 4 hours = RM 75.00"
  ],
  "citation": "[ref:EA-Section-60I]"
}
```

---

## API Reference

### POST /api/chatbot/chat

Send a message to the chatbot.

**Request:**
```json
{
  "question": "How is overtime calculated?",
  "language": "en",
  "sessionId": "session_123456"
}
```

**Response:**
```json
{
  "answer": "Overtime is calculated at 1.5 times your hourly rate...",
  "sourceType": "database",
  "citations": ["EA-Section-60A"],
  "responseTime": 1234
}
```

### POST /api/chatbot/wage/check

Calculate wages and overtime.

**Request:**
```json
{
  "monthly": 2600,
  "otHours": 4
}
```

**Response:**
```json
{
  "steps": ["Daily wage = ...", "Hourly wage = ...", "..."],
  "citation": "[ref:EA-Section-60I]",
  "totalOvertimePay": 75.00
}
```

### GET /api/chatbot/starter-questions?language=en

Get starter questions for a language.

**Response:**
```json
{
  "questions": [
    "How is overtime calculated?",
    "What are legal working hours?",
    "How much leave do I get?"
  ]
}
```

---

## Customization

### Adding New Database Content

Edit `backend/src/db/schema.sql` and add INSERT statements:

```sql
INSERT INTO rights_guide (question, answer, law_ref, category) VALUES
('Your question?', 'The answer...', 'Law-Reference', 'category');
```

Then reload the database or use psql:

```bash
psql -U username -d right4all -c "INSERT INTO rights_guide ..."
```

### Changing System Prompt

Edit `backend/src/services/chatbotService.ts` in the `buildSystemPrompt()` method.

### Styling the Chat Widget

Edit `frontend/src/components/Chatbot/ChatWidget.tsx` and modify Tailwind CSS classes.

---

## Testing

### Unit Tests

Test database queries:
```bash
cd backend
npm test
```

### Manual Testing

1. **Database answers:** Ask "What is the minimum wage?" → Should cite `[ref:Minimum-Wages-Order-2024]`
2. **Fallback answers:** Ask a valid but unlisted question → Should include `(General Information)`
3. **Off-topic:** Ask "What's the weather?" → Should refuse politely
4. **Wage calculator:** Calculate RM 2600 + 4 OT hours → Should show step-by-step

### Speech-to-Text

1. Select English language
2. Click microphone icon
3. Say "How is overtime calculated?"
4. Text should appear in input box

---

## Troubleshooting

### Chatbot not responding

- Check `DEEPSEEK_API_KEY` is set in `.env`
- Check backend logs for API errors
- Verify database connection

### Database timeout

- Increase timeout in `chatbotService.ts`:
  ```typescript
  private timeoutMs = 5000 // 5 seconds
  ```

### Voice input not working

- Only works in HTTPS or localhost
- Only supported in Chrome/Edge
- Only works with English language selected

### Citations not showing

- Check database has `law_ref` values
- Verify response includes `[ref:ID]` format
- Check ChatWidget renders citations section

---

## Deployment

### Vercel Deployment

1. Add environment variable in Vercel dashboard:
   - `DEEPSEEK_API_KEY`
   - `DATABASE_URL`

2. Deploy backend:
   ```bash
   vercel --prod
   ```

3. Update frontend API URL in `frontend/src/api/client.ts`

4. Deploy frontend:
   ```bash
   cd frontend
   vercel --prod
   ```

---

## Data Privacy

- Conversations are logged in `chatbot_conversations` table
- No personal information is required
- Session IDs are randomly generated client-side
- DeepSeek API calls are logged server-side only

---

## Future Enhancements

- [ ] Add wage calculator to chat interface
- [ ] Implement multi-turn conversation context
- [ ] Add feedback buttons (helpful/not helpful)
- [ ] Export chat history as PDF
- [ ] Add image support for document questions
- [ ] Implement TTS (Text-to-Speech) output
- [ ] Add admin dashboard for analytics

---

## Support

For issues or questions:
1. Check this documentation
2. Review backend logs
3. Test API endpoints directly
4. Check browser console for frontend errors

---

## License

Part of the Right4All project - helping migrant workers in Malaysia.
