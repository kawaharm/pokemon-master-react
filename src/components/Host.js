import React from "react";
import "../App.css";
import HpBar from "./HpBar";
import hostImage from "../images/regis-philbin.png";

const Host = ({ host, question, hp }) => {
  return (
    <div id="hostContainer">
      <div id="hostBar">
        <div className="nameAndLvl">
          <span className="username">{host.name}</span>
          <span>Lv:29</span>
        </div>
        <div className="hpContainer">
          <label for="hpBar">HP</label>
          <HpBar variant="determinate" value={hp} />
        </div>
        <div className="question">{question}</div>
      </div>
      <img id="hostImage" src={hostImage} alt="regis-philbin" />
    </div>
  );
};

export default Host;
