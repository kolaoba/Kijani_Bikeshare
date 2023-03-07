import { Link } from "react-router-dom";
import classes from "./parts.module.css";

function HowPart(props) {
  return (
    <div className={classes.parts}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>
          <Link to={props.nav}>{props.btn}</Link>{" "}
        </button>
      </div>
      <div className={classes.imgdiv}>
        <img src={props.img} alt={props.discription} className={classes.img} />
      </div>
    </div>
  );
}

export function PartHow(props) {
  return (
    <div className={classes.parts}>
      <div className={classes.imgdiv}>
        <img src={props.img} alt={props.discription} className={classes.img} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>
          <Link to={props.nav}>{props.btn}</Link>{" "}
        </button>
      </div>
    </div>
  );
}

export default HowPart;
