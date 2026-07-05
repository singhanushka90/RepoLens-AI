import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

mongo_client = MongoClient(os.getenv("MONGODB_URI"))
db = mongo_client['ai_project_review']


def get_database():
    return db
