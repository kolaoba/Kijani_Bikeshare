from flask import Flask
from flask import Flask
from models import storage
from flask_migrate import Migrate
from flask_cors import CORS
from .config import ApplicationConfig

migrate = Migrate()

def create_app():

    app = Flask(__name__)
    app.config.from_object(ApplicationConfig)
    CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})
    
    migrate.init_app(app, storage.engine)
    
    # blueprint for auth routes in our app
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from api.v1.views import app_views
    app.register_blueprint(app_views)
    
    return app
