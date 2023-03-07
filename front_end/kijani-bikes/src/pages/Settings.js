import React from "react";
import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import UserSettings from "../components/Settings";

const Settings = () => {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <UserSettings />
      </Navbar>
    </>
  );
};

export default Settings;
