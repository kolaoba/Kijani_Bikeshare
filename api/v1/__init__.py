from flask import Flask, request, session, abort
from models import storage
from flask_migrate import Migrate
from flask_cors import CORS
from .config import ApplicationConfig
from flask_session import Session


migrate = Migrate()
sess = Session()

def create_app():

    app = Flask(__name__)
    app.config.from_object(ApplicationConfig)


    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, methods=['GET', 'POST'])

    migrate.init_app(app, storage.engine, include_schemas=True)

    sess.init_app(app)
    
    # Define a function to check if the user is authenticated
    def check_authentication():
        if "user_id" not in session:
            abort(401)

    # Define a function to handle the before_request event
    @app.before_request
    def before_request():
        if request.path.startswith('/api/v1'):
            check_authentication()

    # blueprint for auth routes in our app
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from api.v1.views import app_views
    app.register_blueprint(app_views)
    
    return app

