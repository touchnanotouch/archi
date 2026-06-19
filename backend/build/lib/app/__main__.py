import uvicorn

from app.core.config import Settings
from app.core.main import create_app


settings = Settings()
app = create_app(settings)


if __name__ == "__main__":
    uvicorn.run(
        "app.__main__:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.debug,
    )
