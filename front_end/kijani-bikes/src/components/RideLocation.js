// Ride location component

import React from "react";
import classes from "./RideLocation.module.css";

const RideLocation = () => {
  return (
    <section className={classes.rideCont}>
      <h1>Ride Location</h1>
      <label>
        Enter Current Location:
        <input type="text" name="currentLocation" />
      </label>
      <label>
        Enter Destination:
        <input type="text" name="destination" />
      </label>
      <button type="submit">Submit</button>
    </section>
  );
};

export default RideLocation;

// import React, { useState } from "react";

// function DropdownList() {
//   const [selectedValue, setSelectedValue] = useState("");

//   function handleSelectChange(event) {
//     setSelectedValue(event.target.value);
//   }

//   return (
//     <div>
//       <select value={selectedValue} onChange={handleSelectChange}>
//         <option value="">Select an option</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       <p>You selected: {selectedValue}</p>
//     </div>
//   );
// }

// export default DropdownList;
