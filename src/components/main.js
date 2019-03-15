import React from "react";
import mainImage from "../images/star_wars_main.png";

const Main = () => {
  return (
    <>
      <h1>React Hooks sample app</h1>

      <img className="ui large fluid image" src={mainImage} alt='starWars'/>
    </>
  );
};
export default Main;
