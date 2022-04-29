import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import data from "../data"
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";
import normalBaby from "../assets/unadulterated-hoglette.png";
// import offspring from "../data.js"

function HogBoss() {
  const [eyeColor, setEyeColor] = useState("blue");
  const [image, setImage] = useState('')

  const diplayData = data.map((pig) => {
    return <BabyHog key = {pig.name} eyeColor={eyeColor} name={pig.name} hobby={pig.hobby} />
  })

  function handleChangeEyeColor(e) {

    setEyeColor(e.target.value);
    //we want to change the image when you change the color
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
        {diplayData}
      </ul>
    </div>
  );
}

export default HogBoss;
