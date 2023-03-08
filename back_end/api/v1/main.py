from flask import Blueprint, session, jsonify
from models import storage
from models.user import User

main = Blueprint('main', __name__)


@main.route('/profile')
def profile():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    user = storage.get_obj_by_attr(User, id=user_id)
    return jsonify(user.to_dict())
