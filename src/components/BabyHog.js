import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name, hobby, eyeColor}) {

  // Passing as a state since weight changes (200=default)
  const [weight, setWeight] = useState(200)

  // Make an object of eyecolor for the eyecolor
  const eyeColorHandler= {  
   sun: SunBaby,
   blue: BlueBaby,
   glowing: GlowingBaby
}

  
  // weight change function
  function handleChangeWeight(e) {
    // making a new variable to set the variable in a new weight
    const newWeight = e.target.name === "+" ? weight + 5 : weight -5
    setWeight(newWeight)
    } 
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  

  return (
    <li className="hogbabies">
      {/* inserting each info taking out from HogBoss */}
      <h1>{name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      {/* using the function to change the weight */}
      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        {/* setting the eyecolor by calling the object we set and [] to set which color */}
        <img
          src={eyeColorHandler[eyeColor]}
          // calling weight to set which will be chnaged in handlechangeweight
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
