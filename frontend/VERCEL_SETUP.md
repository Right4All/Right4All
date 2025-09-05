# Vercel Deployment Setup for Right4All

## Google Maps Configuration

The application uses Google Maps to display migrant worker data across Malaysian states. To fix the "This page didn't load Google Maps correctly" error, follow these steps:

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps JavaScript API**
   - **Geocoding API** (optional, for address lookups)
   - **Places API** (optional, for location search)

### 2. Create and Configure API Key

1. Navigate to "Credentials" in the API & Services section
2. Click "Create Credentials" > "API Key"
3. **IMPORTANT**: Restrict your API key for security:
   - Click on your newly created API key
   - Under "Application restrictions":
     - Select "HTTP referrers (web sites)"
     - Add these referrers:
       ```
       https://yourdomain.vercel.app/*
       https://*.vercel.app/*
       http://localhost:3000/*
       http://localhost:5173/*
       ```
   - Under "API restrictions":
     - Select "Restrict key"
     - Choose only the APIs you enabled above

### 3. Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to "Settings" > "Environment Variables"
3. Add the following environment variable:
   ```
   Name: VITE_GOOGLE_MAPS_API_KEY
   Value: YOUR_GOOGLE_MAPS_API_KEY_HERE
   ```
4. Make sure it's available for all environments (Production, Preview, Development)

### 4. Domain Configuration

**CRITICAL**: Update your Google Cloud API key restrictions whenever you:
- Deploy to a new Vercel domain
- Use a custom domain
- Create preview deployments

Add these domains to your API key restrictions:
```
https://your-project-name.vercel.app/*
https://your-project-name-git-branch.vercel.app/*
https://your-custom-domain.com/*
```

### 5. Testing the Setup

1. Deploy your application to Vercel
2. Visit the `/insights` page
3. Check browser console for any errors
4. The map should load with Malaysian state markers

### 6. Troubleshooting

**Common Issues:**

1. **"RefererNotAllowedMapError"**
   - Solution: Add your Vercel domain to API key referrer restrictions

2. **"ApiNotActivatedMapError"**
   - Solution: Enable Maps JavaScript API in Google Cloud Console

3. **"InvalidKeyMapError"**
   - Solution: Verify API key is correct and has proper restrictions

4. **Map appears but shows "For development purposes only" watermark**
   - Solution: Set up billing account in Google Cloud Console

5. **Network/CORS errors**
   - Solution: Ensure API key allows your domain in HTTP referrer restrictions

### 7. Cost Management

- Set up [budget alerts](https://cloud.google.com/billing/docs/how-to/budgets) in Google Cloud
- Monitor usage in the [API usage dashboard](https://console.cloud.google.com/apis/dashboard)
- Google provides $200 free credit monthly for Maps API

### 8. Local Development

For local development, create a `.env` file in the frontend directory:
```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

**Security Note**: Never commit API keys to your repository. Always use environment variables.