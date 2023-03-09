import React from "react";
import { Trips } from "../components/Trips";
import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import Footer from "../components/layout/Footer";

const Trip = () => {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <Trips />
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Footer />
        </div>
      </Navbar>
    </>
  );
};

export default Trip;
