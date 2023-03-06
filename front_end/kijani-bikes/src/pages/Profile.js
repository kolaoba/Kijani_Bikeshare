// User Profile page component for the app

import Navbar from "../components/ForDash/Navbar";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar>
        <section>
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
      </Navbar>
    </>
  );
}

export default Profile;
