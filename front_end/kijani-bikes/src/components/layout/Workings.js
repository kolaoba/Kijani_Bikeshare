import HowPart, { PartHow } from "../parts";
import classes from "./Workings.module.css";

import signup from "../../assets/signup.png";

function Workings() {
  return (
    <section className={classes.section}>
      <div className={classes.header}>
        <h1>How it works</h1>
      </div>
      <HowPart title="Sign Up" btn="Sign Up" img={signup} />
      <PartHow title="Get A Bike" btn="Select" img={signup} />
      <HowPart title="Unlock" btn="Select" img={signup} />
      <PartHow title="Ride" btn="Select" img={signup} />
      <HowPart title="Dock" btn="Start Ride" />
    </section>
  );
}

export default Workings;
