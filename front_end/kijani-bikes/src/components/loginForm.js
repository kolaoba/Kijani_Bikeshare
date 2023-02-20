import { Link } from "react-router-dom";
import classes from "./loginForm.module.css";

function LoginForm() {
  return (
    <div className={classes.container}>
      <h2>Login to get started</h2>
      <form>
        <label>
          Email
          <input type="email" name="email" placeholder="youremail@gmail.com" />
        </label>{" "}
        <br />
        <label>
          Password
          <input type="password" name="password" />
        </label>{" "}
        <br />
        <button type="sub">Login</button>
        {/* dont have an account? <a href="#">Sign up</a> */}
        {/* Don't have an account? sign up */}
        <input type="checkbox" name="keepMeLoggedIn" />
        <p>Keep me logged in</p>
        <span>
          Don't have an account?{" "}
          <button>
            <Link to="/signup">Sign Up</Link>
          </button>
        </span>
      </form>
    </div>
  );
}
//   return (
//     <section className={classes.container}>
//       <div>
//         <h1>Login</h1>
//       </div>
//       <div>
//         <form>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" required />

//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" required />

//             <button>Login</button>

//             <div>
//               <p>
//                 Don't have an account? <a href="/signup">Sign Up</a>
//               </p>

//               <p>
//                 Forgot your password?{" "}
//                 <a href="/reset-password">Reset Password</a>
//               </p>

//               <p>
//                 Or <a href="/login">Login</a> with
//               </p>

//               <div>
//                 <button>Google</button>
//                 <button>Facebook</button>

//                 <p>
//                   By signing up, you agree to our{" "}
//                   <a href="/terms">Terms of Service</a> and{" "}
//                   <a href="/privacy">Privacy Policy</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

export default LoginForm;
