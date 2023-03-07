// User profile component for the app

import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import classes from "./Profile.module.css";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <section className={classes.profilepage}>
      <div>
        <h1>Hello {user.first_name}</h1>
        <p>Here is your profile page</p>
        <p>
          Name: {user.last_name} {user.first_name}
        </p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone_number}</p>
      </div>
    </section>
  );
};

export default UserProfile;
