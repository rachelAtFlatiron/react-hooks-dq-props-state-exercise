import React, {useState} from "react";
//import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

//ASSOCIATE STRING VALUE WITH IMAGES
//comment asked for a way to 'map'...when we see 'map' its a clue
//to use an object
//no need to do if/else statement although that is valid
//switch statement is valid
const eyeColorMapper = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby
}

//how would we argument if we wanted to use 'name' instead of 'props.name'
function BabyHog(props) {

  const [weight, setWeight] = useState(200);
  function handleChangeWeight(e) {
    //ONE LINER, BOTH PLUS AND MINUS IN ONE FUNCTION
    const newWeight = e.target.name === "+" ? weight + 10 : weight - 10
    setWeight(newWeight);
  }
  //ONE LINER ONE LINER 
  //const handleChangeWeight = (e) => e.target.name === '+' ? changeWeight((prev) => prev + 10) : changeWeight((prev) => prev - 10)

  return (
    <li className="hogbabies">
      <h1>{props.name}</h1>
      <h3>Weight: {weight} </h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          //get value from object, avoid function return when we can just access object
          //getting function return will take more time, more debugging
          src={eyeColorMapper[props.eyeColor]}
          style={{ height: `${weight}px` }} //CSS CSS CSS CSS
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
