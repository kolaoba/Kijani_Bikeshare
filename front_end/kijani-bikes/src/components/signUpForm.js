// Registration form

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./loginForm.module.css";
import axios from "../api/axios";

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function SignupForm() {
  const emailRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [success, setSuccess] = useState(false);
  const [errMsg, setErreMsg] = useState("");

  //   useEffect(() => {
  //     emailRef.current.focus();
  //   }, []);

  //   Check for firstName valid input
  useEffect(() => {
    if (firstName.length > 0) {
      setValidFirstName(true);
    } else {
      setValidFirstName(false);
    }
  }, [firstName]);

  //  Check for lastName valid input
  useEffect(() => {
    if (lastName.length > 0) {
      setValidLastName(true);
    } else {
      setValidLastName(false);
    }
  }, [lastName]);

  // Check for phone valid input
  useEffect(() => {
    if (phone.length > 0) {
      if (phone.length >= 10) {
        setValidPhone(true);
      } else {
        setValidPhone(false);
      }
    } else {
      setValidPhone(false);
    }
  }, [phone]);

  // Check for email valid input
  useEffect(() => {
    if (email.length > 0) {
      if (email.includes("@") && email.includes(".")) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    } else {
      setValidEmail(false);
    }
  }, [email]);

  // Check for password valid input
  useEffect(() => {
    const result = pwdRegex.test(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  // Clear error message
  useEffect(() => {
    setErreMsg("");
  }, [validEmail, validPassword, validMatch]);

  // Submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      email: email,
      city_name: "Lagos",
      password: password,
    };

    const valid1 = pwdRegex.test(password);
    const valid2 = password === matchPassword;
    if (!valid1 || !valid2) {
      setErreMsg("Invalid entry");
      return;
    }
    try {
      const response = await axios.post("/signup", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      });
      console.log(formData);
      console.log(response.data); // Get the response data
      setSuccess(true);
      console.log("Success");
    } catch (err) {
      if (!err.response) {
        setErreMsg("Network Error");
        return;
      } else if (err.response.status === 401) {
        setErreMsg("Invalid credentials");
        return;
      } else {
        setErreMsg("Registration Error");
        return;
      }
    }
  };

  return (
    <>
      {success ? (
        <section className={classes.container}>
          <h2>Success</h2>
          <p>Thank you for registering</p>
          <Link className={classes.link} to="/login">
            Log In
          </Link>
        </section>
      ) : (
        <section className={classes.container}>
          <p className={errMsg ? "errMsg" : "offscreen"}>{errMsg}</p>
          <h2>Register</h2>
          <form onSubmit={submitHandler}>
            <label htmlFor="firstName">
              First Name
              <input
                type="text"
                id="firstName"
                autoComplete="off"
                placeholder="John"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </label>
            <label htmlFor="lastName">
              Last Name
              <input
                type="text"
                id="lastName"
                autoComplete="off"
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                placeholder="john@doe.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </label>
            <label htmlFor="phone">
              Phone
              <input
                type="tel"
                id="phone"
                autoComplete="off"
                placeholder="1234567890"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="text"
                id="password"
                autoComplete="off"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </label>
            <label htmlFor="matchPassword">
              Confirm Password
              <input
                type="text"
                id="matchPassword"
                autoComplete="off"
                placeholder="Confirm Password"
                onChange={(e) => setMatchPassword(e.target.value)}
                value={matchPassword}
                required
              />
            </label>
            <button
              type="submit"
              disabled={
                !validEmail ||
                !validPassword ||
                !validMatch ||
                !validFirstName ||
                !validLastName ||
                !validPhone
              }
            >
              Register
            </button>
            <br />
            <br />
            <span>
              Already have an account?{" "}
              <button>
                <Link to="/login">Log In</Link>
              </button>{" "}
            </span>
          </form>
        </section>
      )}
    </>
  );
}

// const SignupForm = () => {
//   return (
//     <div className={classes.container}>
//       <h2>Signup</h2>
//       <form>
//         <label>
//           Firstname
//           <input type="text" name="firstname" placeholder="jane" />
//         </label>
//         <br />
//         <label>
//           Lastname
//           <input type="text" name="lastname" placeholder="doe" />
//         </label>
//         <br />
//         <label>
//           email
//           <input type="text" name="email" placeholder="jane@doe.com" />
//         </label>
//         <br />
//         <label htmlFor="phone">
//           Phone Number
//           <input type="tel" id="phone" placeholder="08012345678" />
//         </label>
//         <label>
//           Password
//           <input type="text" name="password" />
//         </label>
//         <br />
//         <label>
//           Confirm Password
//           <input type="text" name="confirmPassword" />
//         </label>
//         <input type="checkbox" className="checkbox" />
//         <label>I agree to the terms of services</label>
//         <br />
//         <button type="sub">Signup</button>
//         <br />
//         <br />
//         <br />
//         <span>
//           Already have an account?{" "}
//           <button>
//             <Link to="/login">Log In</Link>
//           </button>
//         </span>
//       </form>
//     </div>
//   );
// };

export default SignupForm;
