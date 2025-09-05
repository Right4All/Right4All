# Right4All Project Structure

## Overview
This project is organized as a monorepo with clear separation between backend and frontend code.

## Directory Structure
```
├── backend/                 # Node.js/Express API server
│   ├── src/
│   │   ├── routes/         # API route definitions
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Database models
│   │   ├── utils/          # Utility functions
│   │   ├── config/         # Configuration files
│   │   └── index.ts        # Entry point
│   ├── tests/              # Backend tests
│   ├── scripts/            # Database scripts, migrations
│   └── package.json
│
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── api/            # API client code
│   │   ├── store/          # State management
│   │   ├── utils/          # Frontend utilities
│   │   ├── styles/         # CSS/styling
│   │   └── main.tsx        # Entry point
│   └── package.json
│
├── shared/                 # Shared code between frontend/backend
│   ├── types.ts           # TypeScript type definitions
│   └── Quizquestion.json  # Shared data
│
├── docs/                  # Documentation
│   └── project-structure.md
│
└── package.json           # Root package.json for workspace management
```

## Getting Started

### Development Setup
1. Install dependencies: `npm run install:all`
2. Start both frontend and backend: `npm run dev`
3. Or run individually:
   - Frontend only: `npm run dev:frontend` (runs on http://localhost:5173)
   - Backend only: `npm run dev:backend` (runs on http://localhost:3000)

### Build for Production
- Build both: `npm run build`
- Build frontend: `npm run build:frontend`
- Build backend: `npm run build:backend`

## Technology Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation
- Zustand for state management
- Three.js for 3D components
- Custom Translation System with React Context
- Dynamic content translation API

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL database
- Zod for validation
- Translation API with multiple providers
- Caching system for translations

### Translation System
- Support for 5 languages: English, Bahasa Malaysia, Nepali, Hindi, Bengali
- Multiple translation providers (Google Translate, LibreTranslate, Static fallbacks)
- Frontend React components for automatic translation
- Caching for performance optimization
- Batch translation for multiple texts

### Shared
- TypeScript for type safety across the stack
- Shared type definitions
- Common utilities and data