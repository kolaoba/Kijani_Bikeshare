import redis
import secrets

class ApplicationConfig:
    SECRET_KEY = secrets.token_hex(16)
    SQLALCHEMY_TRACK_NOTIFICATIONS = False 
    SQLALCHEMY_ECHO = True
    JSONIFY_PRETTYPRINT_REGULAR = True
    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url("redis://clustercfg.kijani-redis-db.lyajd0.memorydb.us-east-1.amazonaws.com:6379")