from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.auth import router as auth_router
from routes.dashboard import router as dashboard_router
from routes.profile import router as profile_router
from routes.reviews import router as reviews_router
from routes.review import router as review_router
from routes.upload import router as upload_router

app = FastAPI(
    title="AI Project Reviewer"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth")
app.include_router(upload_router)
app.include_router(review_router)
app.include_router(dashboard_router)
app.include_router(profile_router)
app.include_router(reviews_router)