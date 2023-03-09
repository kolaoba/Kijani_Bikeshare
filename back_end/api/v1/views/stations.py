""" objects that handles all default RestFul API actions for stations """
from models.station import Station
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify
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
    station = storage.get_obj_by_attr(Station, name=name)
    if not station:
        abort(404)

    bike_count = storage.get_available_bike_count(station.id)

    return jsonify({
        "station_details": station.to_dict(),
        "available_bikes": bike_count
    })
