from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    debug: bool = True
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/archi"
    redis_url: str = "redis://localhost:6379/0"
    jwt_secret: str = "dev-jwt-secret"
    cors_origins: list[str] = ["http://localhost:5173"]

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")
