from fastapi import APIRouter
from pydantic import BaseModel

from chains.reviewer_chain import review_project


router = APIRouter()


class ReviewRequest(BaseModel):
    question: str


@router.post("/review")
async def review(request: ReviewRequest):

    response = review_project(
        request.question
    )

    return {
        "question": request.question,
        "review": response
    }