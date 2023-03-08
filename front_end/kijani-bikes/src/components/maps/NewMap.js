// Map implementation using React Google Maps

import React from "react";
import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function NewMap() {
  const [lats, setLats] = useState(0);
  const [lngs, setLngs] = useState(0);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  // set position to current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLats(position.coords.latitude);
        setLngs(position.coords.longitude);
      });
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  function Map() {
    const center = {
      lat: lats,
      lng: lngs,
    };
    return (
      <GoogleMap
        mapContainerStyle={{
          maxWidth: "1100px",
          height: "700px",
          margin: "60px auto",
        }}
        zoom={10}
        center={center}
      >
        <Marker position={center}>
          {" "}
          <h1>Check</h1>
        </Marker>
      </GoogleMap>
    );
  }

  return (
    <div>
      <Map />
    </div>
  );
}
