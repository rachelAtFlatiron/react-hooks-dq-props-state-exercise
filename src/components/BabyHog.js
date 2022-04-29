import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

function BabyHog({eyeColor, hog}) {

  const [weight, changeWeight] = useState(200);
  //checks which button was clicked based on the names value. then adds or subtracts based on that value.
  const handleChangeWeight = (e) => e.target.name === '+' ? changeWeight((prev) => prev + 10) : changeWeight((prev) => prev - 10)

  // renders image based on comparing eyeColor's value 
  const image = () => {
    switch(eyeColor){
      case 'sun':
        return SunBaby;
      case 'blue':
        return BlueBaby;
      case 'glowing':
        return GlowingBaby;
      default:
        return normalBaby
    }
  }

  return (
    <li className="hogbabies">
      <h1>Name: {hog.name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hog.hobby}:</h3>
      <h4>Eye Color: {eyeColor}</h4>
      {/*adds an onClick event listener to the buttons*/}
      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>
      {/* dynamically changes weight based on the weight variable */}
      <div className="hb-wrap">
        <img
          src={image()}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
