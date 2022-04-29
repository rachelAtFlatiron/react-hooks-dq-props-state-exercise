// import other components for use within this component
import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

//main function which passes down props from its parent and display JSX to the DOM
function BabyHog(props) {

  /*~~~~~~~~~~~~~~~~~~~~~
  CAMEL CASE ONLY . NO SetWeight DO setWeight
  upper case everywhere is reserved for component names like BabyHog....
  technically line 4-6 should be sunBaby, blueBaby, glowingBaby as well
  since those are just images and not components

  it will still work the way you have it...having setWeight is just a VERY
  VERY common naming convention style and good form especially for interviews
  ~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  const [weight, SetWeight] = useState(10) // Use state to change/update weight
  function handleChangeWeight(e) {
      /*~~~~~~~~~~~~~~~~~~~~~
      *PERFECT! can you refactor it into one line for kicks?
      ~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    if(e.target.name === "+"){
    SetWeight((weight) => weight + 10)
    } else {
      SetWeight((weight) => weight - 10)
    }
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
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
        
        {// This is probably way too much code to do this but it was the only way i could get it to work
}
      {
          /*~~~~~~~~~~~~~~~~~~~
          * to dynamically change src....create an object like this:
          let obj = {
            blue: BlueBaby,
            glowing: GlowingBaby,
            sunny: SunBaby
          }

          *in your src you can do 
          src={obj[eyes]}

          *that way in style you can have
          style={{height: `${weight}px`}}

          *ultimately instead of having a bunch of different versions...only change the two things
          *(src, height/weight) that you need to change...so condensed it will look like this:

          <img
            src={obj[eyes]}
            style={{height: `${weight}px`}}
            alt="MasterBlasterJrJr"
          />

          *and you only need one!
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      }
      {BlueBaby.includes(props.eyes) ? 
       <img 
          src={BlueBaby}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
        : GlowingBaby.includes(props.eyes) ?
        <img 
          src={GlowingBaby}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
        : SunBaby.includes(props.eyes) ?
        <img 
          src={SunBaby}
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
