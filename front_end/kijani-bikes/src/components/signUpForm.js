import { Link } from "react-router-dom";
import classes from "./loginForm.module.css";

const SignupForm = () => {
  return (
    <div className={classes.container}>
      <h2>Signup</h2>
      <form>
        <label>
          Firstname
          <input type="text" name="firstname" placeholder="jane" />
        </label>
        <br />
        <label>
          Lastname
          <input type="text" name="lastname" placeholder="doe" />
        </label>
        <br />
        <label>
          email
          <input type="text" name="email" placeholder="jane@doe.com" />
        </label>
        <label>
          Password
          <input type="text" name="password" />
        </label>
        <br />
        <label>
          Confirm Password
          <input type="text" name="confirmPassword" />
        </label>
        <input type="checkbox" className="checkbox" />
        <label>I agree to the terms of services</label>
        <br />
        <button type="sub">Signup</button>
        <br />
        <br />
        <br />
        <span>
          Already have an account?{" "}
          <button>
            <Link to="/login">Log In</Link>
          </button>
        </span>
      </form>
    </div>
  );
};

export default SignupForm;
