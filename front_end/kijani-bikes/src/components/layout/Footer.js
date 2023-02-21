// Create a 2 column footer

import classes from "./Footer.module.css";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.leftCol}>
          <Link to="/" className={classes.footer_link}>
            Home
          </Link>
          <Link to="/about" className={classes.footer_link}>
            About
          </Link>
          <Link to="/contact" className={classes.footer_link}>
            Contact
          </Link>
        </div>
        <div className={classes.rightCol}>
          <Link to="/privacy" className={classes.footer_link}>
            Privacy
          </Link>
          <Link to="/privacy" className={classes.footer_link}>
            Service And Updates
          </Link>
          <Link to="/privacy" className={classes.footer_link}>
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
