import classes from "./parts.module.css";

function HowPart(props) {
  return (
    <div className={classes.parts}>
      <div>
        <h2>{props.title}</h2>
        <p>Save Time And Money By Signing Up For A Free Account Now!</p>
        <button>{props.btn}</button>
      </div>
      <div>
        <h2>2. Find a bike</h2>
        <p>Find a bike near you and book it</p>
        <button>Find a bike</button>
      </div>
    </div>
  );
}

export default HowPart;
