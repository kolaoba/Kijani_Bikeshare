import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.section}>
      <div className={classes.write}>
        <h1>Ride The Green Wave</h1>
        <p>Accessible, Affordable, Eco-sustainable</p>
      </div>
      <div className={classes.imgdiv}>
        <img
          src="https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="bike"
          className={classes.img}
        />
      </div>
    </section>
  );
}

export default Hero;
