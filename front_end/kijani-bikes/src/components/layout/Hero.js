import classes from "./Hero.module.css";

import hero from "../../assets/roadbike.png";

function Hero() {
  return (
    <section className={classes.section}>
      <div className={classes.write}>
        <h1>Ride The Green Wave</h1>
        <p>Accessible, Affordable, Eco-sustainable</p>
      </div>
      <div className={classes.imgdiv}>
        <img src={hero} alt="Hero Bike" className={classes.img} />
      </div>
    </section>
  );
}

export default Hero;
