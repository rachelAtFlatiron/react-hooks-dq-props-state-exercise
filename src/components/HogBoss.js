import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function HogBoss() {
  // setting eyecolor by usestate cuz it changes
  const [eyeColor, setEyeColor] = useState("normal");
  const [list, setList] = useState(offspring)

  // creating function that matches the color with the value from input
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
        {/* mapping over the data of list */}
        {list.map((item) => <BabyHog name={item.name} hobby={item.hobby} eyeColor={eyeColor}/>)}
      </ul>
    </div>
  );
}

export default HogBoss;
