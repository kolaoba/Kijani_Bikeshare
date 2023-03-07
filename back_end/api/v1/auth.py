from flask import Blueprint, session, jsonify, request
from werkzeug.security import check_password_hash
from models.engine.db_storage import classes
from models import storage

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def login_post():

        
    if request.form:
        data = request.form

    elif request.get_json():
        data = request.get_json()


    user = storage.get_obj_by_attr(classes.get('User'), 'email',data.get('email'))
    
    # check if user actually exists
    # take the user supplied password, hash it, and compare it to the hashed password in database
    if not user or not check_password_hash(user.password, data.get('password')): 
        
        return jsonify({"error": "Unauthorized"}), 401 

    # add user to session
    session["user_id"] = user.id

    return jsonify(user.to_dict()), 200

@auth.route('/signup', methods=['POST'])
def handle_signup():

    if request.form:
        data = request.form

    elif request.get_json():
        data = request.get_json()

    user = storage.get_obj_by_attr(classes.get('User'), 'email',data.get('email')) # if this returns a user, then the email already exists in database
    city = storage.get_obj_by_attr(classes.get('City'), 'name',data.get('city_name'))
    
    if user:  
        return jsonify({"error": "User already exists"}), 409
    
    if not city:
        return jsonify({"error": "Invalid City Selected"}), 409

    # adjust user data replacing city_name with city_id
    new_data = {**data}
    new_data["city_id"] = city.id
    new_data.pop("city_name")
    
    # create new user with the form new_data. Hash the password so plaintext version isn't saved.
    new_user = classes.get('User')(**new_data)
    # add the new user to the database
    new_user.save()
    
    # add user to session
    session["user_id"] = new_user.id

    return jsonify(new_user.to_dict()), 201

@auth.route('/logout')
def logout():
    session.pop("user_id")
    return jsonify({"message": "User logged out successfully"}), 200 
