""" objects that handles all default RestFul API actions for trips """
from models.trip import Trip
from models.station import Station
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify, request, session
from flasgger.utils import swag_from
from datetime import datetime


@app_views.route('/trips/start_trip', methods=['POST'],
                 strict_slashes=False)
@swag_from('documentation/trips.yml', methods=['POST'])
def start_trip():
    """
    Starts a trip for a given user
    
    Payload should contain:
        start_docking_station (str): The name of the station
        destination_docking_station (str): The name of the station
        
    """
    if not request.get_json():
        abort(400, description="Not a JSON")
    
    if 'start_docking_station' not in request.get_json():
        abort(400, description="Missing start docking station")
    if 'destination_docking_station' not in request.get_json():
        abort(400, description="Missing destination docking station")
    
    # parse the json data
    data = request.get_json()
    
    # get the user id from the session
    user_id = session.get("user_id")
    
    # get the station objects
    start_station = storage.get_obj_by_attr(Station, 'name', data.get('start_docking_station'))
    end_station = storage.get_obj_by_attr(Station, 'name', data.get('destination_docking_station'))
    
    # check if the start station exists
    if not start_station:
        abort(400, description="Invalid Start Station")
        
    # check if the end station exists    
    if not end_station:
        abort(400, description="Invalid End Station")
        
    # get an available bike    
    bike = storage.get_available_bike(start_station.id)
    
    # create new Trip instance
    new_trip = Trip(user_id=user_id,
                    bike_id=bike.id,
                    start_docking_station_id=start_station.id,
                    destination_docking_station_id=end_station.id,
                    status = 0
                    )
    
    new_trip.save()
    
    return jsonify(new_trip.to_dict()), 201


@app_views.route('/trips/end_trip', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/trips.yml', methods=['GET'])
def end_trip():
    """Ends trip for a user
    """
    # get user_id from session
    user_id = session.get("user_id")
    
    # find the active trip for the user
    current_trip = storage.get_active_trip(user_id)
    
    if not current_trip:
        abort(404, description="User has no active trip")
    
    # update the trip status to 1
    current_trip.status = 1
    
    # update the end time
    current_trip.end_time = datetime.utcnow()
    
    # save changes to trip object
    current_trip.save()
    
    return jsonify()