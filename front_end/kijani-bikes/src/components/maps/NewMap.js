// Map implementation using React Google Maps

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function NewMap() {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: ,
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Map />
    </div>
  );
}

function Map() {
  console.log("Map function");
  console.log(
    "process.env.REACT_APP_GOOGLE_API_KEY: ",
    process.env.REACT_APP_GOOGLE_API_KEY
  );
  return (
    <GoogleMap
      mapContainerStyle={{
        width: "1100px",
        height: "700px",
        margin: "60px auto",
      }}
      zoom={10}
      center={{ lat: 47.444, lng: -122.176 }}
    >
      <Marker position={{ lat: 47.444, lng: -122.176 }} />
    </GoogleMap>
  );
}
