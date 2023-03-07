""" objects that handles all default RestFul API actions for trips """
from models.trip import Trip
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify
from flasgger.utils import swag_from


@app_views.route('/trip/start_trip', methods=['POST'],
                 strict_slashes=False)
@swag_from('documentation/trips.yml', methods=['POST'])
def start_trip():
    """
    Starts a trip for a given user
    """
    

    return 