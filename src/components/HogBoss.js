import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function HogBoss() {
  //create state with eyeColor that will be passed down to child
  const [eyeColor, setEyeColor] = useState("blue");
  
  //function to handle eyecolor change, uses setter function to change eyecolor onChange event
  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }
  //create variable that iterates through offspring data and render baby hog with passed down props
  let renderBabyHogs = offspring.map((hog)=> {
   return ( <BabyHog key={hog.id} name={hog.name} hobby={hog.hobby} eyeColor={eyeColor}/>)
  })
  console.log(renderBabyHogs)
  
  return (
    //JSX for list of eye colors with onChange event on each
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
      {/* JSX for HogBoss info */}
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist">
       {renderBabyHogs}
      </ul>
    </div>
  );
}

export default HogBoss;
