#!/usr/bin/python3
""" Flask Application """
from models import storage
from api.v1.views import app_views
from os import environ
from flask import Flask, render_template, make_response, jsonify
from flask_cors import CORS
from flasgger import Swagger
from flasgger.utils import swag_from
from flask_login import LoginManager
import secrets


app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
login_manager = LoginManager()
login_manager.init_app(app)

app.register_blueprint(app_views)
app.secret_key = secrets.token_hex(16)

# blueprint for auth routes in our app
from .auth import auth as auth_blueprint
app.register_blueprint(auth_blueprint)

# cors = CORS(app, resources={r"/*": {"origins": "0.0.0.0"}})
# CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

login_manager.login_view = "auth.login"
login_manager.login_message_category = "danger"

from models.user import User

@login_manager.user_loader
def load_user(user_id):
    return User.query.filter(User.id == user_id).first()

@app.teardown_appcontext
def close_db(error):
    """ Close Storage """
    storage.close()


@app.errorhandler(404)
def not_found(error):
    """ 404 Error
    ---
    responses:
      404:
        description: a resource was not found
    """
    return make_response(jsonify({'error': "Not found"}), 404)

app.config['SWAGGER'] = {
    'title': 'Kijani Bikeshare Restful API',
    'uiversion': 3
}

Swagger(app)


if __name__ == "__main__":
    """ Main Function """
    host = '0.0.0.0'
    port = '5000'
    app.run(host=host, port=port, threaded=True, debug=True)
