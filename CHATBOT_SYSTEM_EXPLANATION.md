# Right4All Chatbot System Architecture

## Overview
The Right4All chatbot is a sophisticated AI-powered assistant designed specifically for migrant workers in Malaysia. It combines multiple technologies to provide accurate, context-aware responses in 5 languages.

## Core Components

### 1. Multi-Language Support
- **Supported Languages**: English, Bahasa Malaysia, Nepali, Hindi, Bengali
- **Language Detection**: Uses language codes (en, ms, ne, hi, bn) to determine response language
- **System Prompt**: Custom prompts for each language ensure culturally appropriate responses

### 2. Hybrid RAG (Retrieval-Augmented Generation) System

#### A. Vector Similarity Search
- **Embedding Model**: Local embedding model (no API key needed)
- **Vector Database**: PostgreSQL with pgvector extension
- **Search Function**: `search_knowledge_base()` stored procedure
- **Similarity Threshold**: 0.7 for relevant matches
- **Knowledge Sources**:
  - `rights_guide` - Worker rights Q&A
  - `faq` - Frequently asked questions
  - `employment_laws` - Legal provisions
  - `wage_rules` - Wage calculation rules
  - `states` - Migration statistics

#### B. Keyword Fallback Search
- **Trigger Conditions**: RAG timeout or failure
- **Search Method**: Traditional SQL ILIKE queries
- **Multi-Table Search**: Searches across all knowledge tables
- **Migration Statistics**: Special handling for state-specific data

### 3. Question Classification System

#### A. Relevance Detection
```typescript
private isRelevantQuestion(question: string): boolean
```
- **Multi-language Keywords**: 200+ keywords across 5 languages
- **Common Greetings**: Support for short questions in all languages
- **Word Count Analysis**: Lenient for short questions (1-3 words)

#### B. Statistics Question Detection
```typescript
const isStatisticsQuestion = (
  lowerQuestion.includes('statistics') || 
  lowerQuestion.includes('number') || 
  (lowerQuestion.includes('migrant') && lowerQuestion.includes('workers')) ||
  (lowerQuestion.includes('how many') && lowerQuestion.includes('workers')) ||
  (lowerQuestion.includes('workers') && lowerQuestion.includes('in') && 
   (lowerQuestion.includes('selangor') || lowerQuestion.includes('johor') || 
    lowerQuestion.includes('penang') || lowerQuestion.includes('kuala lumpur')))
)
```

### 4. AI Integration (DeepSeek API)

#### A. Message Construction
```typescript
const messages: ChatMessage[] = [
  {
    role: 'system',
    content: this.buildSystemPrompt(language)
  },
  {
    role: 'system', 
    content: `CONTEXT FROM DATABASE:\n${contextText}`
  },
  {
    role: 'user',
    content: question
  }
]
```

#### B. System Prompt Features
- **Language Enforcement**: Always answer in requested language
- **Citation Requirements**: Use [ref:id] format for database references
- **Fallback Rules**: Use general knowledge only for relevant topics
- **Accuracy Emphasis**: Provide exact numbers from database context

### 5. Database Architecture

#### A. Knowledge Tables
- **rights_guide**: Worker rights Q&A with law references
- **faq**: General frequently asked questions  
- **employment_laws**: Legal provisions and sections
- **wage_rules**: Wage calculation formulas
- **states**: Migration statistics by Malaysian state

#### B. Vector Search Infrastructure
- **pgvector Extension**: Enables vector similarity search
- **Embedding Storage**: Vector representations of content
- **Stored Procedure**: `search_knowledge_base()` for unified search

### 6. Fallback Mechanisms

#### A. AI Service Failure
- **Context-Based Fallback**: Uses database context directly
- **Generic Response**: Technical difficulties message
- **Statistics Priority**: Ensures migration numbers are always provided

#### B. Database Connection Issues
- **Insights API Fallback**: Uses REST API when direct DB fails
- **Error Handling**: Comprehensive try-catch blocks
- **Graceful Degradation**: Maintains basic functionality

### 7. Specialized Features

#### A. Migration Statistics
- **Direct Database Access**: States table with actual numbers
- **API Fallback**: Insights API as backup data source
- **Formatted Responses**: Proper number formatting with citations

#### B. Wage Calculations
```typescript
async calculateWage(monthlySalary: number, overtimeHours: number = 0)
```
- **Step-by-Step Breakdown**: Daily and hourly calculations
- **Overtime Rules**: 1.5x rate for normal overtime
- **Legal Citations**: References to Employment Act sections

#### C. Multi-language NGO Information
- **Location-Based**: NGOs by Malaysian state
- **General Information**: National organizations
- **Contact Guidance**: Referral to Support page

## Workflow Process

1. **Question Reception** → User submits question with language preference
2. **Relevance Check** → Multi-language keyword matching
3. **Database Search** → RAG vector search with keyword fallback
4. **Context Assembly** → Build context from database results
5. **AI Processing** → Send to DeepSeek with system prompt
6. **Response Generation** → AI generates answer with citations
7. **Fallback Handling** → Direct database response if AI fails
8. **Response Delivery** → Return formatted answer in correct language

## Performance Optimizations

- **Timeout Management**: 3-second timeout for database searches
- **Connection Pooling**: Database connection reuse
- **Local Embeddings**: No external API dependencies for embeddings
- **Caching**: Vector embeddings cached for performance

## Error Handling

- **API Failures**: Comprehensive error messages and fallbacks
- **Database Errors**: Multiple fallback strategies
- **Network Issues**: Connection timeout management
- **Invalid Questions**: Off-topic response with guidance

## Security Features

- **Input Validation**: Question relevance filtering
- **API Key Management**: Secure DeepSeek API integration
- **Database Security**: Parameterized queries to prevent SQL injection
- **Content Filtering**: Restricted to migrant worker topics

This architecture ensures the chatbot provides accurate, timely, and culturally appropriate responses to migrant workers while maintaining high reliability and performance.
