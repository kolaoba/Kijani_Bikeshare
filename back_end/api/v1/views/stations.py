""" objects that handles all default RestFul API actions for stations """
from models.station import Station
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify, make_response, request
from flasgger.utils import swag_from


@app_views.route('/station/<name>', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/stations.yml', methods=['GET'])
def get_station(name):
    """
    Retrieves the station objects
    of a give name
    
    Args:
        name (str): The name of the station
    """
    station = storage.get_obj_by_attr(Station, 'name', name)
    print(storage.get_long_lat_from_obj(station))

    return jsonify(station.to_dict())