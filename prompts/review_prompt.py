from langchain_core.prompts import ChatPromptTemplate


review_prompt = ChatPromptTemplate.from_template(
"""
You are an expert AI Software Engineer.

Your task is to review the given software project.

Context:
{context}

User Question:
{question}

Analyze the project and provide:

1. Project Summary
2. Tech Stack
3. Folder Structure Review
4. Code Quality
5. Possible Bugs
6. Security Issues
7. Performance Improvements
8. Best Practices
9. Overall Rating (out of 10)

Give a detailed and structured response.
"""
)