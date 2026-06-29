<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,50:16213e,100:0f3460&height=220&section=header&text=Language%20Detection%20AI&fontSize=42&fontColor=ffffff&fontAlignY=38&desc=ML-Powered%20Language%20Classifier%20with%20FastAPI%20%26%20React&descAlignY=58&descSize=16&animation=fadeIn" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Accuracy-94.7%25-22c55e?style=for-the-badge" />
  <img src="https://img.shields.io/badge/NLP-TF--IDF%20%7C%20MultinomialNB-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

<br/>

---

## 🌍 What Is This?

**Language Detection AI** is a production-ready NLP web application that automatically identifies the language of any given text. Built with a **MultinomialNB + TF-IDF pipeline** achieving **94.7% accuracy**, it features a **FastAPI backend** and a **React frontend** for real-time language prediction.

> 💡 **Real-World Use Cases:**
> Multilingual Chatbots • Content Moderation • Search Engines • Translation Systems • Social Media Analysis

---

## ⚙️ ML Pipeline

```
Raw Text Input
      ↓
TF-IDF Vectorization (CountVectorizer)
      ↓
MultinomialNB Classifier
      ↓
Language Prediction
      ↓
FastAPI Response → React UI
```

---

## 📊 Model Performance

| Metric | Score |
|--------|-------|
| **Accuracy** | **94.7%** |
| Algorithm | MultinomialNB |
| Vectorizer | TF-IDF / CountVectorizer |
| Task | Multi-class Classification |

---

## 🏗️ System Architecture

```
┌─────────────────┐         ┌──────────────────┐
│  React Frontend │  HTTP   │  FastAPI Backend  │
│   (Port 3000)   │◄───────►│   (Port 8000)     │
│                 │  POST   │                  │
│  Text Input     │/predict │  ML Model        │
│  Result Display │         │  language_model  │
└─────────────────┘         │  vectorizer.pkl  │
                            └──────────────────┘
```

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌍 **Multi-Language Detection** | Detects multiple languages instantly |
| ⚡ **Real-time Prediction** | FastAPI for ultra-fast responses |
| 🎨 **React Frontend** | Clean, responsive UI |
| 🔗 **REST API** | Production-ready `/predict` endpoint |
| 🧠 **ML Pipeline** | TF-IDF + MultinomialNB |
| 💾 **Pickle Serialization** | Model saved for deployment |
| 🔒 **CORS Enabled** | Secure cross-origin requests |

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=python,fastapi,react,sklearn" />
</p>

| Layer | Technology |
|-------|-----------|
| **ML Model** | Scikit-learn MultinomialNB |
| **Vectorizer** | TF-IDF / CountVectorizer |
| **Backend** | FastAPI + Pydantic |
| **Frontend** | React.js |
| **Serialization** | Pickle |
| **API** | REST (POST /predict) |

---

## 📁 Project Structure

```
Language-Detection/
│
├── 🐍 main.py                 ← FastAPI backend
├── 📓 language.ipynb          ← Model training notebook
├── 📋 requirements.txt        ← Python dependencies
├── 🔒 .gitignore
├── 📖 README.md
│
└── 📂 frontend/               ← React app
    ├── src/
    ├── public/
    ├── package.json
    └── package-lock.json
```

---

## 🚀 Setup & Installation

### Backend (FastAPI)

```bash
# 1. Clone the repository
git clone https://github.com/singhanushka90/Language-Detection-ml-webapp.git
cd Language-Detection-ml-webapp

# 2. Install dependencies
pip install -r requirements.txt

# 3. Train model (generates .pkl files)
# Run language.ipynb in Jupyter

# 4. Start FastAPI server
uvicorn main:app --reload
```

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

---

## 🔗 API Reference

### `POST /predict`

**Request:**
```json
{
  "Text": "Bonjour, comment allez-vous?"
}
```

**Response:**
```json
{
  "text": "Bonjour, comment allez-vous?",
  "language": "French"
}
```

### `GET /`
```json
{
  "messages": "Language Detection !"
}
```

---

## 💻 How To Use

```
1. Start FastAPI backend → uvicorn main:app --reload
2. Start React frontend → npm start
3. Enter any text in the input box
4. Click Detect Language
5. See the predicted language instantly!
```

---

## 🔮 Future Enhancements

| Feature | Description |
|---------|-------------|
| 🤗 **BERT Model** | Transformer-based detection |
| 🌐 **More Languages** | Expand language support |
| 📊 **Confidence Score** | Show prediction probability |
| 🐳 **Docker** | Containerized deployment |
| ☁️ **Cloud Deploy** | AWS/Render deployment |

---

## 👩‍💻 Author

<p align="center">
  <b>Anushka Singh</b><br/>
  B.Tech AI/ML Student | NLP Engineer in Progress<br/>
  <a href="https://github.com/singhanushka90">GitHub: singhanushka90</a>
</p>

---

<p align="center">
  <i>"Breaking language barriers through the power of Machine Learning."</i>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f3460,100:1a1a2e&height=100&section=footer" />
</p>

