//imported useState
import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

//destructured the prop to name data in function of BabyHog
function BabyHog({id, name, hobby, eye}) {

  
//used destructured array method to set the useState
  let [weight, setWeight] = useState(0)

  function handleChangeWeight(e) {

//called the setter function and called back the current weight set at 0 to add 1
    setWeight((weight) => weight + 1)

    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }

//made a new function for the decrease weight button
  function handleDecreaseWeight(e) {
    setWeight((weight) => weight - 1)

  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>{hobby}</h3>
      <h4>Eye Color:{eye}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleDecreaseWeight}>Decrease Weight</button>

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
