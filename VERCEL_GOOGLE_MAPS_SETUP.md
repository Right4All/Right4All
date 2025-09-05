# Google Maps Setup for Vercel Deployment

## Issues Fixed
The interactive map was failing on Vercel due to:
1. ❌ Missing loading states 
2. ❌ Wrong Google Maps libraries (`places` instead of `marker`, `geometry`)
3. ❌ Simplified error handling
4. ❌ Missing environment variable debugging
5. ❌ No region/language configuration for Malaysia

## ✅ Solutions Applied

### 1. Restored Full Error Handling
- Added back loading states (`isLoading`)
- Comprehensive error messages for different Google Maps API errors
- Debug logging for environment variables

### 2. Correct Library Configuration
```javascript
const loader = new Loader({
  apiKey,
  version: 'weekly',
  libraries: ['marker', 'geometry'], // ✅ Correct for markers
  region: 'MY', // ✅ Malaysia region
  language: 'en' // ✅ English language
});
```

### 3. Environment Variables for Vercel

#### Set in Vercel Dashboard:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:

```
VITE_GOOGLE_MAPS_API_KEY = AIzaSyBQSqhwzBqJQSE0Zj4G-ddYoLQp0LlRmZY
```

⚠️ **SECURITY WARNING**: This API key was shared publicly and should be regenerated immediately.

### 4. Google Maps API Configuration

#### Required APIs to Enable:
- ✅ Maps JavaScript API
- ✅ Places API (if using places features)
- ✅ Geocoding API (if using geocoding)

#### Domain Restrictions:
Add these domains to your Google Maps API key:
- `*.vercel.app` (for Vercel deployments)
- `your-custom-domain.com` (if using custom domain)
- `localhost:*` (for local development)

### 5. Debugging on Vercel

The component now includes debug logging. Check the browser console on your Vercel deployment for:
```
Google Maps API Key Debug: {
  hasKey: true/false,
  keyLength: number,
  keyStart: "AIzaSyBQS...",
  keyEnd: "...mZY",
  isPlaceholder: false
}
```

## Common Vercel Deployment Issues

### Issue 1: "RefererNotAllowedMapError"
**Solution**: Add your Vercel domain to Google Maps API key restrictions

### Issue 2: "InvalidKeyMapError"  
**Solution**: Regenerate API key and update in Vercel environment variables

### Issue 3: "ApiNotActivatedMapError"
**Solution**: Enable Maps JavaScript API in Google Cloud Console

### Issue 4: Environment Variable Not Found
**Solution**: Ensure `VITE_GOOGLE_MAPS_API_KEY` is set in Vercel dashboard

## Testing Steps

1. **Deploy to Vercel** with updated code
2. **Check browser console** for debug logs
3. **Navigate to Insights page** (`/insights`)
4. **Verify map loads** with Malaysian state markers
5. **Test marker interactions** and info windows

## Emergency Steps if Map Still Fails

1. **Regenerate Google Maps API Key** (current one was publicly exposed)
2. **Update environment variables** in Vercel
3. **Check domain restrictions** in Google Cloud Console
4. **Verify billing** is enabled for Google Maps API
5. **Check API quotas** haven't been exceeded

## File Changes Made
- ✅ `frontend/src/components/GoogleMalaysiaMap.tsx` - Restored full functionality
- ✅ Added proper loading states and error handling
- ✅ Fixed library imports for marker functionality
- ✅ Added Malaysia-specific region/language settings