from fastapi import APIRouter, Depends
from pydantic import BaseModel

from chains.reviewer_chain import review_project
from auth.dependencies import get_current_user


router = APIRouter()


class ReviewRequest(BaseModel):
    question: str


@router.post("/review")
async def review(request: ReviewRequest, user=Depends(get_current_user)):

    response = review_project(
        request.question,
        user["email"]
    )

    return {
        "question": request.question,
        "review": response
    }