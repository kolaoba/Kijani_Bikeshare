from flask import Flask
from flask_login import LoginManager
import secrets
from flask import Flask, request, render_template, make_response, jsonify
from models import storage


def create_app():

    app = Flask(__name__)

    app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
    app.secret_key = secrets.token_hex(16)

    login_manager = LoginManager()
    login_manager.init_app(app)
    login_manager.login_view = "auth.login"
    login_manager.login_message_category = "danger"

    from models.user import User

    @login_manager.user_loader
    def load_user(user_id):
        # since the user_id is just the primary key of our user table, use it in the query for the user
        print(f"This is the user_id: {user_id}")
        return storage.get(User, user_id)
    
    # blueprint for auth routes in our app
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from api.v1.views import app_views
    app.register_blueprint(app_views)

    

    return app
