import classes from "./parts.module.css";

function HowPart(props) {
  return (
    <div className={classes.parts}>
      <div>
        <h2>{props.title}</h2>
        <p>Save Time And Money By Signing Up For A Free Account Now!</p>
        <button>{props.btn}</button>
      </div>
      <div className={classes.imgdiv}>
        <img src={props.img} alt={props.discription} className={classes.img} />
      </div>
    </div>
  );
}

export default HowPart;
