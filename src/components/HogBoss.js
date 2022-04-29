//component imports to use within this component
import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data";

//main function in this component - returns JSX based on data we pass through
function HogBoss() {
  const [eyeColor, setEyeColor] = useState("blue");

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  *outside of your return( ) statement is regular JavaScript 
  *so you don't need curly braces around comments
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
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
          /*~~~~~~~~~~~~~~~~~~~
          *good use of curly braces for comments
          *use .map to loop through offspring and DYNAMICALLY create BabyHog's

          offspring.map((baby, i) => {
            return <BabyHog eyes={eyeColor} data={baby} key={baby.id} />
          })

          *useful in case you need to make 100 different BabyHogs
          ~~~~~~~~~~~~~~~~~~~~~~*/
        }
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
