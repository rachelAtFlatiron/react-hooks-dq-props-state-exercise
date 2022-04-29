import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ eyeColor, name, hobby }) {

  const [weight, setWeight] = useState(200);
 
  let image = normalBaby
  if(eyeColor.toLowerCase() === 'blue'){
    image = BlueBaby
  }else if(eyeColor.toLowerCase() === 'sun'){
    image = SunBaby
  }else if(eyeColor.toLowerCase() === 'glowing'){
    image = GlowingBaby
  }

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if(e.target.textContent === "Increase Weight"){
      setWeight((weight) => weight + 10)
    } else if(e.target.textContent === "Decrease Weight") {
      setWeight((weight) => weight - 10)
    }
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={image}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
