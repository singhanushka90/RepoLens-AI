from datetime import datetime

from fastapi import APIRouter, Depends
from pydantic import BaseModel

from chains.reviewer_chain import review_project
from auth.dependencies import get_current_user
from database.collections import reviews


router = APIRouter()


class ReviewRequest(BaseModel):
    question: str


@router.post("/review")
async def review(request: ReviewRequest, user=Depends(get_current_user)):

    response = review_project(
        request.question,
        user["email"]
    )

    review_record = {
        "user_email": user["email"],
        "question": request.question,
        "review": response,
        "reviewed_at": datetime.utcnow().isoformat()
    }
    reviews.insert_one(review_record)

    return {
        "question": request.question,
        "review": response
    }