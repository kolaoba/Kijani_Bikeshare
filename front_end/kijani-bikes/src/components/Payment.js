import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payments = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Card:", card);
  };

  return (
    <div className="payment">
      <h1>Payment Details</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <input
          className="payment-form__name"
          type="text"
          title="Lipa Na Mpesa"
          placeholder="Enter phone number"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="payment-form__card"
          type="text"
          title="Enter Mpesa PIN"
          placeholder="____-____-____-____"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />
        <div className="payment-form__line"></div>
        <Link to="/trips">
          <button
            className="payment-form__pay-complete"
            type="submit"
            title="Pay & Ride"
          >
            confirm payment
          </button>
        </Link>
        <Link to="/dashboard">
          <button
            className="payment-form__back"
            type="button"
            title="Back"
            short={true}
          >
            Back
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Payments;
