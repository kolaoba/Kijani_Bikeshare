import React from "react";
import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import Payments from "../components/Payment";
import Footer from "../components/layout/Footer";

const Payment = () => {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <Payments />
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Footer />
        </div>
      </Navbar>
    </>
  );
};

export default Payment;
