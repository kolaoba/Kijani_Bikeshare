from flask import Blueprint
from flask_login import login_required
auth = Blueprint('auth', __name__)

@auth.route('/login')
@login_required
def login():
    return 'Login'

@auth.route('/signup')
def signup():
    return 'Signup'

@auth.route('/logout')
def logout():
    return 'Logout'