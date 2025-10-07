# Right4All Frontend - Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Backend Deployed**: Deploy the backend first to get the API URL
3. **Google Maps API Key**: Required for map functionality
4. **Git Repository**: Push your frontend code to GitHub/GitLab

## Environment Variables

Set these environment variables in your Vercel dashboard:

- `VITE_API_URL`: Your deployed backend URL (e.g., `https://your-backend.vercel.app/api`)
- `VITE_GOOGLE_MAPS_API_KEY`: Your Google Maps API key
- `NODE_ENV`: Set to `production`

## Deployment Steps

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from the frontend directory:
   ```bash
   cd "C:\Users\ASUS\OneDrive\Documents\Right4All 2.0\Right4All\frontend"
   vercel
   ```

4. Follow the prompts:
   - Link to existing project? No
   - Project name: `right4all-frontend`
   - Directory: `./` (current directory)

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your frontend repository
3. Configure settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Root Directory: `frontend` (if deploying from root)

## Environment Variables Setup

In your Vercel dashboard:

1. Go to Project Settings → Environment Variables
2. Add the following variables:

```
VITE_API_URL = https://your-backend.vercel.app/api
VITE_GOOGLE_MAPS_API_KEY = your_google_maps_api_key_here
NODE_ENV = production
```

## Google Maps API Key Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (if using place search)
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

## Project Structure for Deployment

If deploying the entire Right4All directory, ensure your `vercel.json` in the root points to the frontend:

```json
{
  "version": 2,
  "name": "right4all-frontend",
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "frontend/dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/frontend/dist/index.html"
    }
  ]
}
```

## Testing the Deployment

After deployment, test the following:

1. **Homepage**: Should load correctly
2. **Navigation**: All routes should work
3. **Language Switching**: Test different languages
4. **API Connectivity**: Check Get Support page loads organizations
5. **Maps**: Verify Google Maps integration works

## Multilingual Features

Your frontend supports these languages:
- English (en) - Default
- Bahasa Malaysia (ms)
- Nepali (ne)
- Hindi (hi)
- Bengali (bn)

The language switcher will automatically fetch translated content from your backend API.

## Build Optimization

The build process shows some large chunks. Consider these optimizations for production:

1. **Code Splitting**: Use dynamic imports for large components
2. **Image Optimization**: Compress large PNG assets
3. **Bundle Analysis**: Use `npm run build -- --analyze` to identify large dependencies

## Connecting Frontend to Backend

Ensure your frontend's `VITE_API_URL` environment variable points to your deployed backend:

```
VITE_API_URL = https://your-backend-deployment.vercel.app/api
```

The frontend will automatically use this URL in production mode.