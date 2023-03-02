#!/usr/bin/python3
"""
Contains class BaseModel
"""

from datetime import datetime
import models
from sqlalchemy import Column, String, DateTime, MetaData
from sqlalchemy.ext.declarative import declarative_base
import uuid
from dotenv import load_dotenv
import os

time = "%Y-%m-%dT%H:%M:%S.%f"

load_dotenv()

if os.environ['KJB_ENV'] == 'test':
    schema = 'kijani_test'
elif os.environ['KJB_ENV'] == 'prod':
    schema = 'kijani_prod' 

Base = declarative_base(metadata=MetaData(schema=schema))

class BaseModel:
    """The BaseModel class from which future classes will be derived"""
    
    id = Column(String(60), primary_key=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)

    def __init__(self, *args, **kwargs):
        """Initialization of the base model"""
        if kwargs:
            for key, value in kwargs.items():
                if key != "__class__":
                    setattr(self, key, value)
            if kwargs.get(
                    "created_at",
                    None) and isinstance(
                    self.created_at,
                    str):
                self.created_at = datetime.strptime(kwargs["created_at"], time)
            else:
                self.created_at = datetime.utcnow()
            if kwargs.get(
                    "updated_at",
                    None) and isinstance(
                    self.updated_at,
                    str):
                self.updated_at = datetime.strptime(kwargs["updated_at"], time)
            else:
                self.updated_at = datetime.utcnow()
            if kwargs.get("id", None) is None:
                self.id = str(uuid.uuid4())
        else:
            self.id = str(uuid.uuid4())
            self.created_at = datetime.utcnow()
            self.updated_at = self.created_at

    def __str__(self):
        """Returns a string representation of the instance"""
        cls = (str(type(self)).split('.')[-1]).split('\'')[0]
        new_dict = self.__dict__.copy()

        if '_sa_instance_state' in new_dict:
            del new_dict["_sa_instance_state"]
        return '[{}] ({}) {}'.format(cls, self.id, new_dict)

    def save(self):
        """updates the attribute 'updated_at' with the current datetime"""
        self.updated_at = datetime.utcnow()
        models.storage.new(self)
        models.storage.save()

    def to_dict(self, save_fs=None):
        """returns a dictionary containing all keys/values of the instance"""
        new_dict = self.__dict__.copy()
        if "created_at" in new_dict:
            new_dict["created_at"] = new_dict["created_at"].strftime(time)
        if "updated_at" in new_dict:
            new_dict["updated_at"] = new_dict["updated_at"].strftime(time)
        new_dict["__class__"] = self.__class__.__name__
        if "_sa_instance_state" in new_dict:
            del new_dict["_sa_instance_state"]
        if save_fs is None:
            if "password" in new_dict:
                del new_dict["password"]
        return new_dict

    def delete(self):
        """delete the current instance from the storage"""
        models.storage.delete(self)
