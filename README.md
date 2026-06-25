# 🚀 RepoLens AI

### AI-Powered Software Project Reviewer, Architecture Analyzer & Interview Preparation Assistant

RepoLens AI is an advanced RAG-powered platform that enables developers, students, and engineering teams to analyze an entire software project using natural language.

Instead of manually reviewing hundreds of files, RepoLens AI automatically understands your codebase, identifies technologies, explains architecture, evaluates code quality, generates interview questions, and creates resume-ready project descriptions.

Built using modern LLM infrastructure, Hybrid Retrieval, Pinecone Vector Search, and conversational memory, RepoLens AI transforms software repositories into an intelligent knowledge source.

---

## 🎯 Why RepoLens AI?

Understanding large codebases is one of the most time-consuming tasks for developers.

RepoLens AI solves this problem by allowing users to upload a project and instantly ask:

- What does this project do?
- Which technologies are used?
- Explain the architecture.
- What improvements can be made?
- Generate interview questions from the code.
- Create ATS-friendly resume points.

---

## ✨ Key Features

### 🏗️ Project Architecture Analysis

Automatically identifies:

- Project structure
- Application flow
- Components and modules
- Design patterns
- Architectural decisions

### 🔍 Advanced Hybrid Retrieval

Uses multiple retrieval techniques simultaneously:

- Dense Vector Search (Semantic Search)
- BM25 Keyword Search
- Parent Document Retrieval
- History-Aware Retrieval

This ensures highly relevant context retrieval even for large codebases.

### 🤖 Conversational Code Intelligence

Ask questions such as:

```text
Explain the authentication system.

How does the API communicate with the database?

Which files handle user management?

What is the complete workflow of the application?
```

The assistant responds using only information extracted from the uploaded project.

### 📄 Resume Bullet Point Generator

Automatically converts project implementation details into professional ATS-friendly resume points.

Example:

```text
• Developed a Retrieval-Augmented Generation (RAG) system using LangChain, Pinecone, and Groq LLM.

• Implemented Hybrid Search using BM25 and Dense Retrieval to improve answer relevance.

• Built scalable REST APIs using FastAPI with conversational memory support.
```

### 🎤 AI Interview Preparation

Generates project-specific interview questions directly from your implementation.

Example:

```text
• Explain Parent Document Retrieval.

• Why did you choose Pinecone over ChromaDB?

• How does Hybrid Search improve retrieval quality?

• What challenges arise when chunking large codebases?
```

### 💬 Persistent Conversation Memory

Maintains context across multiple interactions using session-based chat history.

This enables natural follow-up questions such as:

```text
User: Explain the authentication flow.

User: What are its weaknesses?

User: How can it be improved?
```

The assistant understands references without requiring repetition.

---

## 🏛️ System Architecture

```text
Software Project (ZIP)
        │
        ▼
Directory Loader
(TextLoader)
        │
        ▼
Document Processing
        │
        ▼
Recursive Text Splitter
        │
        ▼
HuggingFace Embeddings
(all-MiniLM-L6-v2)
        │
        ▼
Pinecone Vector Database
        │
        ├───────────────► BM25 Retriever
        │
        ▼
Parent Document Retriever
        │
        ▼
Ensemble Retriever
(Hybrid Search)
        │
        ▼
History Aware Retriever
        │
        ▼
Groq LLM
        │
        ▼
Project Intelligence Layer
        │
        ▼
Analysis • Review • Interview Questions • Resume Points
```

---

## ⚙️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Python | Core Development |
| FastAPI | Backend APIs |
| LangChain | RAG Orchestration |
| Groq | LLM Inference |
| Pinecone | Vector Database |
| HuggingFace | Embeddings |
| BM25 Retriever | Sparse Retrieval |
| Parent Document Retriever | Context Preservation |
| Ensemble Retriever | Hybrid Search |
| Pydantic | Data Validation |

---

## 📡 API Endpoints

### Upload Project

```http
POST /upload-project
```

Upload a ZIP archive containing project source code.

### Chat with Project

```http
POST /chat
```

Ask questions about the uploaded project.

Example:

```json
{
  "input": "Explain the authentication flow",
  "session_id": "abc123"
}
```

### Generate Project Summary

```http
GET /project-summary
```

Returns:

- Project Type
- Technology Stack
- Architecture Overview
- Strengths
- Weaknesses

### Generate Interview Questions

```http
GET /interview-questions
```

Returns project-specific technical interview questions.

---

## 💡 Example Use Cases

### Developer Onboarding

New team members can understand large repositories in minutes instead of days.

### Project Documentation

Generate architecture explanations without manually writing documentation.

### Resume Building

Convert technical implementations into recruiter-friendly resume points.

### Interview Preparation

Prepare for project discussions and technical interviews using AI-generated questions.

### Code Review Assistance

Identify:

- Architectural weaknesses
- Missing components
- Scalability concerns
- Improvement opportunities

---

## 🔮 Future Roadmap

- GitHub Repository Analysis
- Multi-Language Support (Python, JavaScript, TypeScript, Java, C++)
- Automated Architecture Diagram Generation
- Security Vulnerability Detection
- Code Quality Scoring
- Project Complexity Analysis
- Team Knowledge Base Integration
- Enterprise Documentation Generation

---

## 📈 What Makes RepoLens AI Different?

Unlike traditional "Chat with PDF" applications, RepoLens AI is specifically designed for software repositories.

It combines:

✅ Hybrid Retrieval  
✅ Parent Document Retrieval  
✅ Conversational Memory  
✅ Architecture Analysis  
✅ Resume Generation  
✅ Interview Preparation  

into a single AI-powered developer platform.

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/yourusername/repolens-ai.git
cd repolens-ai
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Environment

Windows:

```bash
venv\Scripts\activate
```

Mac/Linux:

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Create .env File

```env
GROQ_API_KEY=your_groq_key
PINECONE_API_KEY=your_pinecone_key
PINECONE_INDEX=your_index_name
```

### Run Application

```bash
uvicorn main:app --reload
```

Open:

```text
http://127.0.0.1:8000/docs
```

---

## 👩‍💻 Author

**Anushka Singh**

AI/ML Engineer • LLM Developer • RAG Enthusiast

Building intelligent systems that transform complex information into actionable knowledge.

---

<p align="center">
  <b>Turning Software Projects into Conversations.</b>
</p>
