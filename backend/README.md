# Right4All Backend

REST API server for the Right4All platform.

## Setup

1. Install dependencies: `npm install`
2. Copy environment variables: `cp .env.example .env`
3. Configure your database in `.env`
4. Start development: `npm run dev`

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/insights/overview` - Overview data
- `GET /api/insights/states` - State data
- `GET /api/insights/sectors` - Sector data  
- `GET /api/insights/nationalities` - Nationality data

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint