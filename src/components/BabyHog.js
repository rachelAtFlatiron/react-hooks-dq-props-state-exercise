import React, {useState}from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";


// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({eyeColor, name, hobby}) {
  //create state for weight and set inital value to 0
  let [weight, setWeight] = useState(50);

  //create function to use setter function to increase or decrease depending on which button was pressed
  function handleChangeWeight(e) {
    if(e.target.name === "+"){
      //increase by 50lbs
      setWeight(weight +=50)
    }else{
      //decrease by 50lbs
      setWeight(weight -=50)
    }
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }

  return (
    //this returns JSX of each hog baby with details of name, hobby, eye color with imported props from parent
    //component
    <li className="hogbabies">
      <h1>Name: {name}</h1>
      {/*Weight is state and changes within this component by handleChangeWeight funciton  */}
      <h3>Weight: {weight}lbs</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      {/* buttons with onclick event to increase and decrease the weight of hog baby */}
      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      {/* this is where we change the height of the hog baby image by using weight state */}
      <div className="hb-wrap">
        <img
          src={normalBaby}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
