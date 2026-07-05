from fastapi import APIRouter, Depends

from auth.dependencies import get_current_user
from database.collections import reviews

router = APIRouter()


@router.get("/my_reviews")
async def my_reviews(user=Depends(get_current_user)):
    review_history = sorted(
        reviews.find(
            {"user_email": user["email"]},
            {"_id": 0}
        ),
        key=lambda x: x.get("reviewed_at"),
        reverse=True
    )
    return review_history
