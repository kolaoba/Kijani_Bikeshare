// Create About us section

// Path: src/components/layout/About.js

import { Link } from "react-router-dom";
import classes from "./About.module.css";

function AboutSection() {
  return (
    <section className={classes.section}>
      <h2>About</h2>
      <div className={classes.discription}>
        <p>
          Welcome to our Kijani Bike-Sharing application! We are passionate
          about making urban transportation more efficient, sustainable, and
          enjoyable. Our goal is to provide a seamless experience for our users,
          whether they are commuting to work, exploring the city, or simply
          getting some exercise. <br />
          lorem ipsum dolor sit amet, consectetur lorem2000 adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={classes.team}>
        <h2>Our Team</h2>
        <p>
          <strong>John Doe</strong> - CEO
        </p>
        <p>
          <strong>Jane Doe</strong> - CTO
        </p>
        <p>
          <strong>John Smith</strong> - COO
        </p>
      </div>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </section>
  );
}

export default AboutSection;
