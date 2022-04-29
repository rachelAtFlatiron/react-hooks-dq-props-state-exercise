//component imports to use within this component
import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data";

//main function in this component - returns JSX based on data we pass through
function HogBoss() {
  const [eyeColor, setEyeColor] = useState("blue");

  {
    // this function checks the eye color box that is selected and updates various eyes
  }
  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist">
        {
          // pass down the needed props to the child 'BabyHog' components 
        }
        <BabyHog eyes={eyeColor} data={offspring[0]}/>
        <BabyHog eyes={eyeColor} data={offspring[1]}/>
        <BabyHog eyes={eyeColor} data={offspring[2]} />
      </ul>
    </div>
  );
}

export default HogBoss;
