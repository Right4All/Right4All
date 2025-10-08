# Chatbot Issues Fixed

## ✅ Issues Resolved

### 1. **Input Text Color**
- **Problem:** Text typed in chatbot was not visible (wrong color)
- **Fixed:** Added `text-gray-900` class to textarea in `ChatWidget.tsx:270`

### 2. **Wrong API Port**
- **Problem:** Frontend was calling `localhost:3004` but backend runs on `localhost:3000`
- **Fixed:** Changed `BASE_URL` in `api/client.ts:10` from port 3004 → 3000

### 3. **API Response Structure**
- **Problem:** `chatbotAPI.ts` was trying to access `response.data.data` but `apiClient.post()` returns data directly
- **Fixed:** Updated `chatbotAPI.ts` to handle response correctly

---

## 🔧 Files Modified

1. **`frontend/src/components/Chatbot/ChatWidget.tsx`**
   - Added black text color for input
   - Added console logging for debugging

2. **`frontend/src/api/client.ts`**
   - Changed port from 3004 to 3000
   - Added `post()` method
   - Fixed request options

3. **`frontend/src/services/chatbotAPI.ts`**
   - Fixed base URL from `/api/chatbot` to `/chatbot`
   - Fixed response handling (removed `.data` duplication)
   - Fixed starter questions endpoint

---

## 🧪 Testing Steps

### Test 1: Backend API (Direct)

```bash
# Test chatbot endpoint
curl -X POST http://localhost:3000/api/chatbot/chat \
  -H "Content-Type: application/json" \
  -d '{"question":"What is the minimum wage?","language":"en"}'

# Expected: JSON response with answer, sourceType, citations, responseTime
```

### Test 2: Frontend Connection

1. **Open test HTML file:**
   ```
   Open: C:\Users\ASUS\OneDrive\Documents\Right4All 2.0\Right4All\frontend\test-chatbot.html
   ```

2. Click "Test Chatbot" button
3. Should see JSON response (not CORS error)

### Test 3: Full Integration

1. **Restart frontend** (important!):
   ```bash
   cd "C:\Users\ASUS\OneDrive\Documents\Right4All 2.0\Right4All\frontend"
   # Stop with Ctrl+C if running
   npm run dev
   ```

2. Open http://localhost:5173
3. Click chat button (bottom-right corner)
4. Type a question: "What is the minimum wage?"
5. Should get response without error

### Test 4: Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. Ask a question in chatbot
4. Look for logs:
   - `Chatbot response: { answer: "...", sourceType: "...", ... }`
   - If error, check what the error message says

---

## 🐛 Common Issues & Solutions

### Issue: "Sorry, I encountered an error"

**Check 1: Is backend running?**
```bash
curl http://localhost:3000/api/health
# Should return: {"ok":true,"service":"right4all",...}
```

**Check 2: Is frontend using correct port?**
- Open DevTools → Network tab
- Ask question
- Look at the request URL
- Should be: `http://localhost:3000/api/chatbot/chat`
- NOT: `http://localhost:3004/...`

**Check 3: CORS error?**
- Open DevTools → Console
- Look for red CORS error
- If yes, check backend CORS settings in `api/index.js`

**Check 4: Response structure?**
- Open DevTools → Network tab
- Click on the `/chatbot/chat` request
- Look at Response tab
- Should have: `{ answer, sourceType, citations, responseTime }`

### Issue: Starter questions not loading

**Check:**
```bash
curl http://localhost:3000/api/chatbot/starter-questions?language=en
# Should return: {"questions":["...",""...]}
```

If this works but frontend doesn't show them:
- Check browser console for errors
- Restart frontend dev server

### Issue: Text not visible in input box

**Check:**
- The textarea in ChatWidget should have: `text-gray-900` class
- File: `ChatWidget.tsx:270`

### Issue: Database answers not showing (always "general")

**Solution:**
Run the database schema to create tables:

```bash
# Option 1: Using psql
psql "your_database_url" -f schema/chatbot_schema.sql

# Option 2: Neon Console
# Copy contents of schema/chatbot_schema.sql
# Paste in Neon SQL Editor and run
```

---

## 📝 Debugging Checklist

Run through these in order:

- [ ] Backend is running on port 3000
- [ ] Backend `/api/chatbot/health` returns OK
- [ ] Backend `/api/chatbot/chat` works with curl
- [ ] Frontend is using port 3000 (check `api/client.ts`)
- [ ] Frontend dev server restarted after changes
- [ ] Browser DevTools shows requests to correct port
- [ ] No CORS errors in console
- [ ] Response structure matches expected format
- [ ] Console logs show "Chatbot response: ..."

---

## 🚀 Quick Fix Commands

### Restart Everything

```bash
# Terminal 1: Backend
cd "C:\Users\ASUS\OneDrive\Documents\Server\Right4All---Backend-Database"
# Kill existing: Ctrl+C or taskkill
npm start

# Terminal 2: Frontend
cd "C:\Users\ASUS\OneDrive\Documents\Right4All 2.0\Right4All\frontend"
# Kill existing: Ctrl+C
npm run dev
```

### Test Backend

```bash
curl -X POST http://localhost:3000/api/chatbot/chat \
  -H "Content-Type: application/json" \
  -d '{"question":"What is overtime?","language":"en"}'
```

### Clear Browser Cache

- Press `Ctrl + Shift + Delete`
- Clear cached files
- Hard refresh: `Ctrl + Shift + R`

---

## ✅ Expected Behavior

When working correctly:

1. **User types question** → Text is visible in black
2. **Clicks send** → Loading indicator appears
3. **Backend processes** → Takes 5-10 seconds (DeepSeek API)
4. **Response appears** → Answer in bot bubble
5. **If from database** → Shows citation badges
6. **If general** → Shows "(General Information)" label

---

## 📞 Still Not Working?

Check these final items:

1. **Environment variable set?**
   ```bash
   # In backend .env file:
   DEEPSEEK_API_KEY=sk-53bd684b7e704fbc8ef07516cffd582a
   ```

2. **DeepSeek API key valid?**
   - Test directly: https://platform.deepseek.com/
   - Check API usage/limits

3. **Database connected?**
   ```bash
   curl http://localhost:3000/api/db-test
   # Should return: {"ok":true,"rows":[...]}
   ```

4. **Backend logs showing errors?**
   - Check terminal where backend is running
   - Look for error messages

5. **Frontend build cache?**
   ```bash
   cd frontend
   rm -rf node_modules/.vite
   npm run dev
   ```

---

## 🎉 Success Criteria

You'll know it's working when:

✅ Text appears black while typing
✅ No error message after asking question
✅ Response appears within 10 seconds
✅ Answer is relevant to migrant workers
✅ Console shows "Chatbot response: {...}"
✅ No red errors in DevTools Console
✅ Network tab shows 200 OK for `/chatbot/chat`

---

## 🔗 Related Files

- **Backend API:** `api/index.js`, `api/chatbotService.js`
- **Frontend UI:** `components/Chatbot/ChatWidget.tsx`
- **API Client:** `api/client.ts`, `services/chatbotAPI.ts`
- **Hook:** `hooks/useChatbot.ts`
- **Config:** `.env` (backend), `vite.config.ts` (frontend)
