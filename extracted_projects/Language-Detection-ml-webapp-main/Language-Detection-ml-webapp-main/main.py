from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle

import numpy as np

app=FastAPI()

# Allow requests from the React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
model=pickle.load(open('language_model.pkl','rb'))
cv=pickle.load(open('vectorizer.pkl','rb'))

class TextInput(BaseModel):
    Text:str

@app.get("/")
def home():
    return {"messages":"Language Detection !"}

@app.post("/predict")
def predict(data:TextInput):
    transformed=cv.transform([data.Text]).toarray()
    prediction=model.predict(transformed)
    return {"text":data.Text,
            "language":prediction[0]}

