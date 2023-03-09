import React from "react";
import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import Ride from "../components/Ride";
import Footer from "../components/layout/Footer";

const Rides = () => {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <Ride />
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Footer />
        </div>
      </Navbar>
    </>
  );
};

export default Rides;
