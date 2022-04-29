import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function HogBoss() {
  const [eyeColor, setEyeColor] = useState("blue");
  //do we need state for list of offspring?


  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value)
  }

  const babies = offspring.map((el, i) => {
    return <BabyHog 
      key={el.id} //preferred to have key
      name={el.name}
      hobby={el.hobby}
      eyeColor={eyeColor}
    />
  })

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        checked={eyeColor==="blue"}
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        checked={eyeColor==="sun"}
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        checked={eyeColor==="glowing"}
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
        {babies}
      </ul>
    </div>
  );
}

export default HogBoss;
