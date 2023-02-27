import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import GeoLocation from './GeoLocation';

function BikeShareMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [bikeStations, setBikeStations] = useState([]);

  useEffect(() => {
    axios.get('/api/bike-stations')
      .then((response) => {
        setBikeStations(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    GeoLocation.getCurrentLocation()
      .then((location) => {
        setUserLocation(location);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MapContainer center={userLocation} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {bikeStations.map((station) => (
        <Marker key={station.id} position={station.position}>
          <Popup>{station.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default BikeShareMap;

