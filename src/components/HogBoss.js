import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import data from "../data";
// import offspring from "../data.js"

function HogBoss({offspring}) {
  
  const [eyeColor, setEyeColor] = useState("blue");

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

//Used map to iterate thru all of the data and passed it down to BabyHog component
//Called {babyHog} in line 49
  const babyHog = data.map((baby) =>
  <BabyHog key={baby.id} name={baby.name} hobby={baby.hobby} eye={eyeColor} />)

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
       {babyHog}
      </ul>
    </div>
  );
}

export default HogBoss;
