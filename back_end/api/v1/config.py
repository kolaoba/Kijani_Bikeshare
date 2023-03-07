import redis
import secrets
from dotenv import load_dotenv
import os

load_dotenv()

class ApplicationConfig:
    SECRET_KEY = secrets.token_hex(16)
    SQLALCHEMY_TRACK_NOTIFICATIONS = False 
    SQLALCHEMY_ECHO = False
    JSONIFY_PRETTYPRINT_REGULAR = True
    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url(os.environ["REDIS_DB_URL"])