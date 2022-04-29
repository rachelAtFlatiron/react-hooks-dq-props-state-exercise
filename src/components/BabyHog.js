import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

// pulls in info for babies
function BabyHog({ name, hobby, eyeColor }) {
  const [newWeight, setNewWeight] = useState(200);
  //lets us change the weight directly in the dom

  //increases/decreases weight with state info
  function handleChangeWeight(e) {
    if (e.target.name === "+") {
      setNewWeight((previousWeight) => {
        return previousWeight + 20;
      });
    } else if (e.target.name === "-") {
      setNewWeight((previousWeight) => {
        return previousWeight - 20;
      });
    }
  }
  const eyeColorMapper = {
    normal: normalBaby,
    sun: SunBaby,
    glowing: GlowingBaby,
    blue: BlueBaby,
  };
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
          src={eyeColorMapper[eyeColor]}
          style={{ height: newWeight + "px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
