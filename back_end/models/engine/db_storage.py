#!/usr/bin/python3
"""
Contains the class DBStorage
"""

import models
from models.area import Area
from models.base_model import BaseModel, Base
from models.city import City
from models.bike import Bike
# from models.payment import Payment
from models.rack import Rack
from models.user import User
from models.trip import Trip
from models.user import User
from models.station import Station
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from dotenv import load_dotenv

load_dotenv()

classes = {"Area": Area,
           "Bike": Bike,
           "City": City,
           #    "Payment": Payment,
        #    "Rack": Rack,
           "Station": Station,
           "User": User,
           "Trip": Trip
           }


class DBStorage:
    """interaacts with the MySQL database"""
    engine = None
    __session = None

    def __init__(self):
        """Instantiate a DBStorage object"""
        # HBNB_MYSQL_USER = os.environ['HBNB_MYSQL_USER']
        # HBNB_MYSQL_PWD = os.environ['HBNB_MYSQL_PWD']
        # HBNB_MYSQL_HOST = os.environ['HBNB_MYSQL_HOST']
        # HBNB_MYSQL_DB = os.environ['HBNB_MYSQL_DB']
        HBNB_PG_USER = os.environ['HBNB_PG_USER']
        HBNB_PG_PWD = os.environ['HBNB_PG_PWD']
        HBNB_PG_HOST = os.environ['HBNB_PG_HOST']
        HBNB_PG_DB = os.environ['HBNB_PG_DB']
        HBNB_ENV = os.environ['HBNB_ENV']
        self.engine = create_engine('postgresql://{}:{}@{}/{}'.
                                      format(HBNB_PG_USER,
                                             HBNB_PG_PWD,
                                             HBNB_PG_HOST,
                                             HBNB_PG_DB))
        # self.engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'.
        #                               format(HBNB_MYSQL_USER,
        #                                      HBNB_MYSQL_PWD,
        #                                      HBNB_MYSQL_HOST,
        #                                      HBNB_MYSQL_DB))
        if HBNB_ENV == "test":
            Base.metadata.drop_all(self.engine)

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

    def get_obj_by_attr(self, cls, attr_name, attr_value):
        """Returns Object based on it's attribute by querying directly
        against the DB and returns None if not found"""

        if cls not in classes.values():
            return None

        obj = self.__session.query(cls).filter_by(
            **{attr_name: attr_value}).first()
        if obj:
            return obj
        return None

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
