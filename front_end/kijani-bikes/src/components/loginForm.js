import { Link } from "react-router-dom";
import classes from "./loginForm.module.css";
import { useState, useRef, useEffect } from "react";

function LoginForm() {
  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
    setEmail("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <div className={classes.container}>
          <h2>Success!</h2>
          <p>
            You have successfully logged in.{" "}
            <Link className={classes.link} to="/">
              Go To Dashboard
            </Link>
          </p>
        </div>
      ) : (
        <div className={classes.container}>
          <h2>Login to get started</h2>
          <form>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                placeholder="youremail@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </label>{" "}
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button onClick={handleSubmit}>Login</button>
          </form>
          <span>
            Don't have an account?
            <Link className={classes.link} to="/signup">
              Sign Up
            </Link>
            {/* <button>
          <Link to="/signup">Sign Up</Link>
        </button> */}
          </span>
        </div>
      )}
    </>
  );
}

export default LoginForm;
