import HowPart from "../parts";
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
      <HowPart title="Sign Up" btn="Sign Up" img={signup} />
      <HowPart title="Get A Bike" btn="Select" img={getbike} />
      <HowPart title="Unlock" btn="Unlock" img={unlock} />
      <HowPart title="Ride" btn="Start Ride" img={ride} />
      <HowPart title="Dock" btn="Dock" img={dock} />
    </section>
  );
}

export default Workings;
