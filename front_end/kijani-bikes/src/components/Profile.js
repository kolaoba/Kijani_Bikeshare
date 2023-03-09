// User profile component for the app

import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import classes from "./Profile.module.css";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import logo from "../assets/logo.png";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <section className={classes.profilepage}>
      <div className={classes.image}>
        <img src={logo} alt="profile" />
      </div>

      <div className={classes.prof}>
        <h1>
          Hello {user.first_name}!
          <span>
            <MdIcons.MdEdit />
          </span>
        </h1>
        <p>Welcome to Kijani Bike-share</p>
        <p>
          Name: {user.last_name} {user.first_name}
        </p>
        <p>
          <MdIcons.MdEmail />
          Email address: {user.email}
        </p>
        <p>
          <FaIcons.FaPhone /> Phone number: {user.phone_number}
        </p>
      </div>
    </section>
  );
};

export default UserProfile;
