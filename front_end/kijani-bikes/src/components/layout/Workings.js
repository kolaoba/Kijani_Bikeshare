import HowPart from "../parts";
import classes from "./Workings.module.css";

function Workings() {
  return (
    <section className={classes.section}>
      <div className={classes.header}>
        <h1>How it works</h1>
      </div>
      <HowPart title="Sign Up" btn="Sign Up" />
      <HowPart title="Get A Bike" btn="Select" />
      <HowPart title="Unlock" btn="Unlock" />
      <HowPart title="Ride" btn="Start Ride" />
      <HowPart title="Dock" btn="Dock" />
    </section>
  );
}

export default Workings;
