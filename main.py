#apllication start 1

from fastapi import FastAPI
from routes.upload import router
from routes.review import router as review_router


app=FastAPI(
    title="AI Project Reviewer"
    )
app.include_router(router)
app.include_router(review_router)