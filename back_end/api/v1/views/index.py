from api.v1.views import app_views
from flask import jsonify
from models.engine.db_storage import classes
from models import storage

@app_views.route('/status', methods=['GET'], strict_slashes=False)
def status():
    """ Status of API """
    return jsonify({"status": "OK"})

@app_views.route('/stats', methods=['GET'], strict_slashes=False)
def number_objects():
    """ Retrieves the number of each objects by type """

    num_objs = {}
    for key, value in classes.items():
        num_objs[key] = storage.count(value)

    return jsonify(num_objs)