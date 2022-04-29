// import other components for use within this component
import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

//main function which passes down props from its parent and display JSX to the DOM
function BabyHog(props) {

  const [weight, SetWeight] = useState(10) // Use state to change/update weight
  function handleChangeWeight(e) {
    if(e.target.name === "+"){
    SetWeight((weight) => weight + 10)
    } else {
      SetWeight((weight) => weight - 10)
    }
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }

  function checkEyeColor() {  //here i tried different ways to update the img src 
    let newEyes = normalBaby
    if(SunBaby.includes(props.eyes)) {
      newEyes = SunBaby
    }else if (BlueBaby.includes(props.eyes)) {
        newEyes = BlueBaby
      }else if (GlowingBaby.includes(props.eyes)){
        newEyes = GlowingBaby
      }
      return (
        <img 
          src={newEyes}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      )
    }
    
  // use props to populate JSX
  return (
    <li className="hogbabies">
      <h1>{props.data.name}</h1> 
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {props.data.hobby}</h3>
      <h4>Eye Color: {props.eyes}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        
        {// couldn't finish this part in time
}
      {BlueBaby.includes(props.eyes) ? 
       <img 
          src={BlueBaby}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
        : 
        <img 
          src={normalBaby}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />

      }
      </div>
    </li>
  );
}

export default BabyHog;
