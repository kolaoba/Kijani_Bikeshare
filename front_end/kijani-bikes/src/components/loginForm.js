// Login Form Component

import { Link } from "react-router-dom";
import classes from "./loginForm.module.css";
import { useState, useRef, useEffect } from "react";
import axios from "../api/axios";

function LoginForm() {
  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // email focus on mount
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  //  Error message for invalid input
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const [loginResponse, setLoginResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    const valid1 = email.length > 0;
    const valid2 = password.length > 0;
    if (!valid1 || !valid2) {
      setErrMsg("Invalid entry");
      return;
    }
    try {
      const response = await axios.post("/login", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      });
      setLoginResponse(response.data);
      console.log(response.data); // Get the response data
      setSuccess(true);
      console.log("Success");
    } catch (err) {
      if (!err.response) {
        setErrMsg("Network Error");
        return;
      } else if (err.response.status === 401) {
        setErrMsg("Invalid credentials");
        return;
      } else {
        setErrMsg("Registration Error");
        return;
      }
    }
  };

  return (
    <>
      {success ? (
        <div className={classes.container}>
          <h2>Success!</h2>
          <p>
            Welcome back, {loginResponse.first_name}! <br />
            You have successfully logged in.
            <Link className={classes.link} to="/">
              Go To Dashboard
            </Link>
          </p>
        </div>
      ) : (
        <section className={classes.container}>
          <p className={errMsg ? "classes.error" : "classes.off"}>{errMsg}</p>

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
              type="text"
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
        </section>
      )}
    </>
  );
}

export default LoginForm;
