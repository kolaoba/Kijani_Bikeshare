from flask import Blueprint, render_template
from flask_login import login_required, current_user

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/profile')
@login_required
def profile():
    # return render_template('profile.html', current_user=current_user)
    print(current_user)
    return current_user.to_dict()
