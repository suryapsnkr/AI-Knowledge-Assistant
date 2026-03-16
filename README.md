
# AI Knowledge Base Assistant

An AI-powered application that allows users to upload documents and ask questions about them.

The system retrieves relevant document content and uses an LLM to generate answers.

## Features

- Upload documents
- Ask questions
- AI-generated answers
- MongoDB storage
- OpenAI embeddings

## Architecture

User → Frontend → Backend API → Retrieval Service → OpenAI → Response

## Setup

### Backend

cd backend
npm install

Create .env

OPENAI_API_KEY=your_key
MONGO_URI=your_mongo_connection

npm start

### Frontend

Use the index.js file in a Next.js project or adapt to React.

## Example Question

"What is the refund policy?"

The system retrieves stored document context and generates an answer.
