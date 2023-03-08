import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MapComponent() {
  const [map, setMap] = useState(null);
  const [locationInput, setLocationInput] = useState('');

  useEffect(() => {
    const loadScript = (url, callback) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onload = () => callback();
      document.body.appendChild(script);
    };

    const initMap = () => {
      const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
      const mapOptions = {
        center: { lat: 0, lng: 0 },
        zoom: 10
      };
      const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
      setMap(map);
    };

    loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`, initMap);
  }, []);

  const handleLocationSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/process-location', { location: locationInput });
    console.log(response.data);
    if (map) {
      const { latitude, longitude } = response.data;
      const marker = new window.google.maps.Marker({ position: { lat: latitude, lng: longitude }, map: map });
      map.setCenter({ lat: latitude, lng: longitude });
      map.setZoom(15);
    }
  };

  return (
    <div>
      <form onSubmit={handleLocationSubmit}>
        <label>
          Enter a location:
          <input type="text" value={locationInput} onChange={(e) => setLocationInput(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
}

export default MapComponent;
