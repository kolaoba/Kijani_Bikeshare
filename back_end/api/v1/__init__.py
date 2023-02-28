from flask import Flask
from flask_login import LoginManager
import secrets
from flask import Flask
from models import storage
from flask_migrate import Migrate
from flask_cors  import CORS


migrate = Migrate()

def create_app():

    app = Flask(__name__)
    # CORS(app, resources={r"/*": {"origins": "*"}})

    CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})


    app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
    app.secret_key = secrets.token_hex(16)
    
    migrate.init_app(app, storage.engine)

    login_manager = LoginManager()
    login_manager.init_app(app)
    login_manager.login_view = "auth.login"
    login_manager.login_message_category = "danger"

    from models.user import User

    @login_manager.user_loader
    def load_user(user_id):
        # since the user_id is just the primary key of our user table, use it in the query for the user
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
