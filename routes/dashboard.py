from fastapi import APIRouter, Depends

from auth.dependencies import get_current_user
from database.collections import users, uploads, reviews

router = APIRouter()


@router.get("/dashboard")
async def dashboard(user=Depends(get_current_user)):
    upload_history = list(uploads.find({"user_email": user["email"]}, {"_id": 0}))
    review_history = list(reviews.find({"user_email": user["email"]}, {"_id": 0}))

    return {
        "profile": {
            "name": user.get("name", "User"),
            "email": user["email"]
        },
        "statistics": {
            "total_uploads": len(upload_history),
            "total_reviews": len(review_history)
        },
        "recent_uploads": upload_history[-5:],
        "recent_reviews": review_history[-5:]
    }
