""" objects that handles all default RestFul API actions for cities """
from models.city import City
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify, make_response, request
from flasgger.utils import swag_from


@app_views.route('/cities', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/cities.yml', methods=['GET'])
def get_cities():
    """
    Retrieves the list of all cities objects
    of a specific State, or a specific city
    """
    list_cities = []
    all_cities = storage.all(City).values
    print(all_cities)
    # for city in all_cities:
    #     list_cities.append(city.to_dict())

    return jsonify(list_cities)