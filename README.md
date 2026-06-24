# RepoLens AI

AI-Powered Software Project Reviewer & Architecture Analyzer

RepoLens AI helps developers instantly understand, review, and analyze software projects using Advanced Retrieval-Augmented Generation (RAG).

Upload a project and receive:

- Architecture Analysis
- Tech Stack Detection
- Code Quality Review
- Resume Bullet Points
- Technical Interview Questions
- Improvement Recommendations

---

## Features

### Project Understanding

Automatically identifies:

- Project Type
- System Architecture
- Design Patterns
- Folder Structure
- Technology Stack

### AI Project Review

Generates:

- Strengths
- Weaknesses
- Best Practices
- Optimization Suggestions

### Resume Generator

Creates ATS-friendly resume points directly from project code.

### Interview Preparation

Generates project-specific interview questions based on implementation details.

### Advanced RAG Pipeline

Built using:

- Parent Document Retrieval
- Hybrid Search
- BM25 Retrieval
- Dense Vector Search
- History Aware Retrieval
- Conversational Memory

---

## Architecture

Project Files
↓
Directory Loader
↓
Recursive Text Splitter
↓
Embeddings (MiniLM)
↓
Pinecone Vector Database
↓
Parent Retriever
+
BM25 Retriever
↓
Ensemble Retriever
↓
History Aware Retriever
↓
Groq LLM
↓
AI Project Analysis

---

## Tech Stack

- FastAPI
- LangChain
- Groq
- Pinecone
- HuggingFace Embeddings
- BM25 Retriever
- Parent Document Retriever
- RAG
- Python

---

## API Endpoints

### Upload Project

POST

```http
/upload-project# RepoLens-AI
RepoLens AI AI-Powered Software Project Reviewer &amp; Architecture Analyzer
