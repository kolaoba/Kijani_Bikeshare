#!/usr/bin/python3
"""
Contains the class DBStorage
"""

import models
from models.area import Area
from models.base_model import Base
from models.bike import Bike
from models.bike_station import BikeStation
from models.city import City
# from models.payment import Payment
# from models.rack import Rack
from models.bike_type import BikeType
from models.station import Station
from models.user import User
from models.trip import Trip

import os
from sqlalchemy import create_engine, func
from sqlalchemy.orm import scoped_session, sessionmaker
from dotenv import load_dotenv

load_dotenv()

classes = {"Area": Area,
           "Bike": Bike,
           "BikeStation": BikeStation,
           "BikeType": BikeType,
           "City": City,
           #    "Payment": Payment,
           #    "Rack": Rack,
           "Station": Station,
           "User": User,
           "Trip": Trip
           }


class DBStorage:
    """interacts with the Postgres database"""
    engine = None
    __session = None

    def __init__(self):
        """Instantiate a DBStorage object"""
        KJB_PG_USER = os.environ['KJB_PG_USER']
        KJB_PG_PWD = os.environ['KJB_PG_PWD']
        KJB_PG_HOST = os.environ['KJB_PG_HOST']
        KJB_PG_DB = os.environ['KJB_PG_DB']
        self.engine = create_engine('postgresql://{}:{}@{}/{}'.
                                    format(KJB_PG_USER,
                                           KJB_PG_PWD,
                                           KJB_PG_HOST,
                                           KJB_PG_DB))
        # if os.environ['KJB_ENV'] == "test":
        #     Base.metadata.drop_all(self.engine)

    def all(self, cls=None):
        """query on the current database session"""
        new_dict = {}
        for clss in classes:
            if cls is None or cls is classes[clss] or cls is clss:
                objs = self.__session.query(classes[clss]).all()
                for obj in objs:
                    key = obj.__class__.__name__ + '.' + obj.id
                    new_dict[key] = obj
        return (new_dict)

    def new(self, obj):
        """add the object to the current database session"""
        self.__session.add(obj)

    def save(self):
        """commit all changes of the current database session"""
        self.__session.commit()

    def delete(self, obj=None):
        """delete from the current database session obj if not None"""
        if obj is not None:
            self.__session.delete(obj)

    def reload(self):
        """reloads data from the database"""
        Base.metadata.create_all(self.engine)
        sess_factory = sessionmaker(bind=self.engine, expire_on_commit=False)
        Session = scoped_session(sess_factory)
        self.__session = Session

    def close(self):
        """call remove() method on the private session attribute"""
        self.__session.remove()

    def get(self, cls, id):
        """
        Returns the object based on the class name and its ID, or
        None if not found
        """
        if cls not in classes.values():
            return None

        all_cls = models.storage.all(cls)
        for value in all_cls.values():
            if (value.id == id):
                return value

        return None

    def get_obj_by_attr(self, cls, **kwargs):
        """Returns Object based on it's attribute by querying directly
        against the DB and returns None if not found"""

        if cls not in classes.values():
            return None
        
        query = self.__session.query(cls)
        for attr_name, attr_value in kwargs.items():
            query = query.filter(getattr(cls, attr_name) == attr_value)
        
        obj = query.first()
        if obj:
            return obj
        return None

    def get_long_lat_from_obj(self, obj):
        """Returns the longitude and latitude of an object"""
        if not obj.location:
            return None

        longitude, latitude = self.__session.query(
            func.ST_X(
                obj.location), func.ST_Y(
                obj.location)).first()
        return longitude, latitude

    def get_available_bike_count(self, station_id):
        """Returns the number of available bikes at a station"""
        return self.__session.query(func.count(BikeStation.bike_id)).filter_by(
            station_id=station_id, status=1).scalar()

    def get_available_bike_from_station(self, station_id):
        """Returns an available bike at a station"""
        return self.__session.query(BikeStation).filter_by(
            station_id=station_id, status=1).first()

    def get_active_trip(self, user_id):
        """Returns the active trip of a user"""
        return self.__session.query(Trip).filter_by(
            user_id=user_id, status=0).first()
        
    def get_bike_rate_by_id(self, bike_id):
        """Returns the rate of a bike"""
        
        # get bike type id
        bike_type_id = self.get_obj_by_attr(Bike, id=bike_id).type_id
        
        #  get bike type rate
        rate = self.get_obj_by_attr(BikeType, id=bike_type_id).rate
        
        return rate
    
    def count(self, cls=None):
        """
        count the number of objects in storage
        """
        all_class = classes.values()

        if not cls:
            count = 0
            for clas in all_class:
                count += len(models.storage.all(clas).values())
        else:
            count = len(models.storage.all(cls).values())

        return count

