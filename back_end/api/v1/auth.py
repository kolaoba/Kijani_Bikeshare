from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import check_password_hash
from flask_login import login_user, logout_user, login_required
from models.user import User
from models import storage

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template('login.html')

@auth.route('/login', methods=['POST'])
def login_post():

    if request.method == 'POST':
        if request.form:
            data = request.form
            remember = True if data.get('remember') else False
        elif request.get_json():
            data = request.get_json()

        user = storage.get_user_by_email(email=data.get('email'))
        
        # check if user actually exists
        # take the user supplied password, hash it, and compare it to the hashed password in database
        if not user or not check_password_hash(user.password, data.get('password')): 
            flash('Please check your login details and try again.')
            return redirect(url_for('auth.login')) # if user doesn't exist or password is wrong, reload the page

        # if the above check passes, then we know the user has the right credentials
        # add is_active attribute for flask-login to allow user and then log user in
        if not hasattr(user, 'is_active'):
            setattr(user, 'is_active', True)

        login_user(user, remember=remember)
        return redirect(url_for('main.profile'))

@auth.route('/signup')
def signup():
    return render_template('signup.html')

@auth.route('/signup', methods=['POST'])
def handle_signup():

    if request.method == 'POST':

        if request.form:
            data = request.form
            print(data)

        elif request.get_json():
            data = request.get_json()

        user = storage.get_user_by_email(email=data.get('email')) # if this returns a user, then the email already exists in database

        if user: # if a user is found, we want to redirect back to signup page so user can try again  
            flash('Email address already exists')
            return redirect(url_for('auth.signup'))

        # create new user with the form data. Hash the password so plaintext version isn't saved.
        new_user = User(**data)

        # add the new user to the database
        new_user.save()

        return redirect(url_for('auth.login'))

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.index'))
