import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
// pulls in info for babies
function BabyHog({ id, name, hobby, eyeColor }) {
  const [newWeight, setNewWeight] = useState(0); //lets us change the weight directly in the dom

  //increases/decreases weight with state info
  function handleChangeWeight(e) {
    if (e.target.name === "+") {
      setNewWeight((previousWeight) => {
        return previousWeight + 1;
      });
    } else if (e.target.name === "-") {
      setNewWeight((previousWeight) => {
        return previousWeight - 1;
      });
    }
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {newWeight} </h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor} </h4>

      <button name="+" onClick={handleChangeWeight}>
        Increase Weight
      </button>
      <button name="-" onClick={handleChangeWeight}>
        Decrease Weight
      </button>

      <div className="hb-wrap">
        <img
          src={normalBaby}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
