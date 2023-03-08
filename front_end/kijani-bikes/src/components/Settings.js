import React from "react";
import classes from "./Settings.module.css";

const UserSettings = () => {
  return (
    <section className={classes.settingsCont}>
      <div>
        <h1>Settings</h1>
      </div>
      <div>
        <h3>Change Password</h3>
        <form>
          <label>
            Old Password:
            <input type="password" name="oldPassword" />
          </label>
          <label>
            New Password:
            <input type="password" name="newPassword" />
          </label>
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default UserSettings;
