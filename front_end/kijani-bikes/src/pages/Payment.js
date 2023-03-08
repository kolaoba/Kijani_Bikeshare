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
        <Footer />
      </Navbar>
    </>
  );
};

export default Payment;
