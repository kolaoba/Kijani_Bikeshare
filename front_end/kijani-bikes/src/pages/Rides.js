import React from "react";
import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import Ride  from "../components/Ride";

const Rides = () => {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <Ride />
      </Navbar>
    </>
  );
};

export default Rides;