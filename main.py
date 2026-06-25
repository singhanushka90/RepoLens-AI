#apllication start 1

from fastapi import FastAPI
from routes.upload import router

app=FastAPI(
    title="AI Project Reviewer"
    )
app.include_router(router)