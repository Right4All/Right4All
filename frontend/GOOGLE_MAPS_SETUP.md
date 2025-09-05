# Google Maps API Setup

## Prerequisites
1. A Google Cloud Platform account
2. Billing enabled on your Google Cloud project
3. Google Maps JavaScript API enabled

## Steps to Set Up Google Maps API

### 1. Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing for the project

### 2. Enable Google Maps JavaScript API
1. In the Google Cloud Console, navigate to "APIs & Services" > "Library"
2. Search for "Google Maps JavaScript API"
3. Click on it and press "Enable"

### 3. Create API Key
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key

### 4. Configure API Key Restrictions (Recommended)
1. Click on the API key you just created
2. Under "Application restrictions", choose "HTTP referrers (web sites)"
3. Add your domain(s) where the map will be used:
   - For local development: `http://localhost:*` (this allows any port on localhost)
   - **For your current setup**: Add `http://localhost:5175` (or whatever port Vite is using)
   - You can also use `http://localhost:*` to allow all ports on localhost
   - For production: Replace `https://yourdomain.com` with your actual website domain
   - Example: If your website is `https://right4all.example.com`, use that
4. Under "API restrictions", restrict the key to "Google Maps JavaScript API"

### For Your Current Development Setup:
Since you're running on `http://localhost:5175` (as shown in the terminal output), you should add:
- `http://localhost:5175/*` (specific port)
- OR `http://localhost:*` (all ports on localhost)

**Recommended**: Use `http://localhost:*` during development to avoid port conflicts.

### 5. Update Environment Variables
1. Open the `.env` file in the frontend directory
2. Replace `your_google_maps_api_key_here` with your actual API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

### 6. Restart Development Server
If the development server is running, restart it to load the new environment variable.

## Troubleshooting

### Common Issues
1. **API key not working**: Make sure the API key is correctly copied and restrictions are properly set
2. **Billing not enabled**: Google Maps requires billing to be enabled on your project
3. **Domain not allowed**: Ensure your localhost or production domain is added to the HTTP referrer restrictions
4. **API not enabled**: The Google Maps JavaScript API must be enabled in your Google Cloud project

### Error Messages
- **"This API project is not authorized to use this API"**: Enable the Google Maps JavaScript API in your project
- **"RefererNotAllowed"**: Add your domain to the HTTP referrer restrictions
- **"This page didn't load Google Maps correctly"**: Usually means the API key is invalid, restricted, or the Maps JavaScript API is not enabled

### Steps to Fix "This page didn't load Google Maps correctly":
1. **Check API Key Status**: Go to Google Cloud Console > APIs & Services > Credentials and verify your API key is active
2. **Enable Maps JavaScript API**: Go to APIs & Services > Library, search for "Google Maps JavaScript API" and click "Enable"
3. **Check Billing**: Ensure billing is enabled for your Google Cloud project
4. **Verify Domain Restrictions**: Make sure `http://localhost:*` is added to the HTTP referrer restrictions
5. **Check API Key Restrictions**: Ensure the API key is restricted to only the Maps JavaScript API

### Quick Test:
Open your browser's developer tools (F12) and check the Console tab for specific error messages. The exact error will help diagnose the issue.

## Cost Information
Google Maps JavaScript API offers a free tier with generous usage limits. For most applications, the free tier is sufficient. Check the [Google Maps pricing page](https://cloud.google.com/maps-platform/pricing) for current rates.

## Security Notes
- Never commit your actual API key to version control
- Use environment variables for API keys
- Restrict your API key to specific domains and APIs
- Monitor your usage in the Google Cloud Console
