import HowPart, { PartHow } from "../parts";
import classes from "./Workings.module.css";

import signup from "../../assets/signup.png";
import getbike from "../../assets/getbike.jpg";
import dock from "../../assets/kijanidock.png";
import unlock from "../../assets/unlock.png";
import ride from "../../assets/ride.png";

function Workings() {
  return (
    <section className={classes.section}>
      <div className={classes.header}>
        <h1>How it works</h1>
      </div>
      <HowPart
        description="Save Time And Money By Signing Up For A Free Account Now!"
        title="Sign Up"
        btn="Sign Up"
        img={signup}
        nav="/signup"
      />
      <PartHow
        description="Pick or reserve a bike at the station closest to you and select your destination of choice"
        title="Get A Bike"
        btn="Select"
        img={getbike}
        nav="/reserve"
      />
      <HowPart
        description="Enter the secret code to unlock the bike"
        title="Unlock"
        btn="Unlock"
        img={unlock}
        nav="/rides"
      />
      <PartHow
        description="Enjoy A Green and hassle free Ride To your destination of choice"
        title="Ride"
        btn="Start Ride"
        img={ride}
        nav="/rides"
      />
      <HowPart
        description="Return the bike to a docking station closest to you and dock it. "
        title="Dock"
        btn="Dock"
        img={dock}
        nav="/rides"
      />
    </section>
  );
}

export default Workings;
