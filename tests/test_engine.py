import unittest
from models import storage
from models.city import City
from models.bike_station import BikeStation
from models.engine import db_storage
import inspect
import pep8

DBStorage = db_storage.DBStorage

class TestDBStorageDocs(unittest.TestCase):
    """Tests to check the documentation and style of DBStorage class"""
    @classmethod
    def setUpClass(cls):
        """Set up for the doc tests"""
        cls.dbs_f = inspect.getmembers(DBStorage, inspect.isfunction)

    def test_pep8_conformance_db_storage(self):
        """Test that models/engine/db_storage.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['models/engine/db_storage.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_pep8_conformance_test_db_storage(self):
        """Test tests/test_models/test_db_storage.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['tests/test_models/test_engine/\
test_db_storage.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_db_storage_module_docstring(self):
        """Test for the db_storage.py module docstring"""
        self.assertIsNot(db_storage.__doc__, None,
                         "db_storage.py needs a docstring")
        self.assertTrue(len(db_storage.__doc__) >= 1,
                        "db_storage.py needs a docstring")

    def test_db_storage_class_docstring(self):
        """Test for the DBStorage class docstring"""
        self.assertIsNot(DBStorage.__doc__, None,
                         "DBStorage class needs a docstring")
        self.assertTrue(len(DBStorage.__doc__) >= 1,
                        "DBStorage class needs a docstring")

    def test_dbs_func_docstrings(self):
        """Test for the presence of docstrings in DBStorage methods"""
        for func in self.dbs_f:
            self.assertIsNot(func[1].__doc__, None,
                             "{:s} method needs a docstring".format(func[0]))
            self.assertTrue(len(func[1].__doc__) >= 1,
                            "{:s} method needs a docstring".format(func[0]))

class TestDBStorage(unittest.TestCase):
    def setUp(self):
        self.city_data = {
            "name": "New York City"
        }
        self.city = City(**self.city_data)
        
    def tearDown(self):
        storage.delete(self.city)
        storage.save()

    def test_new(self):
        storage.new(self.city)
        self.assertIn(self.city, storage._DBStorage__session.new)

    def test_save(self):
        storage.new(self.city)
        storage.save()
        self.assertIn(self.city, storage._DBStorage__session)

    def test_delete(self):
        storage.new(self.city)
        storage.delete(self.city)
        self.assertNotIn(self.city, storage._DBStorage__session)

    def test_all(self):
        cities = storage.all(City)
        self.assertIsInstance(cities, dict)
        self.assertIn(self.city, cities.values())

    def test_reload(self):
        storage.new(self.city)
        storage.save()
        storage.reload()
        cities = storage.all(City)
        self.assertIsInstance(cities, dict)
        self.assertNotIn(self.city, cities.values())

    def test_count(self):
        curr_City_count = storage.count(City)
        count = storage.count(City)
        self.assertEqual(count, curr_City_count)
        storage.new(self.city)
        storage.save()
        count = storage.count(City)
        self.assertEqual(count, curr_City_count + 1)

    def test_get(self):
        storage.new(self.city)
        storage.save()
        city_id = self.city.id
        city = storage.get(City, city_id)
        self.assertEqual(city, self.city)

    def test_get_obj_by_attr(self):
        storage.new(self.city)
        storage.save()
        city = storage.get_obj_by_attr(City, name="New York City")
        self.assertEqual(city, self.city)

    def test_get_long_lat_from_obj(self):
        self.city.location = "POINT(-73.935242 40.730610)"
        storage.new(self.city)
        storage.save()
        city = storage.get(City, self.city.id)
        long, lat = storage.get_long_lat_from_obj(city)
        self.assertAlmostEqual(long, -73.935242, places=5)
        self.assertAlmostEqual(lat, 40.730610, places=5)

    def test_get_available_bike_count(self):
        storage.reload()
        bike_station = storage.get_obj_by_attr(BikeStation, station_id=1, bike_id=1)
        count = storage.get_available_bike_count(bike_station.station_id)
        self.assertEqual(count, 1)

    def test_get_available_bike_from_station(self):
        storage.reload()
        bike_station = storage.get_obj_by_attr(BikeStation, status=1)
        bike = storage.get_available_bike_from_station(bike_station.station_id)
        self.assertEqual(bike.id, bike_station.bike_id)

    def test_get_active_trip(self):
        storage.reload()
        trip = storage.get_active_trip(1)
        self.assertIsNone(trip)

    def test_get_bike_rate_by_id(self):
        storage.reload()
        rate = storage.get_bike_rate_by_id('e3250c6d-7b85-426e-8f5c-1391d7ccbec4')
        self.assertEqual(rate, 300)


if __name__ == "__main__":
    unittest.main()
