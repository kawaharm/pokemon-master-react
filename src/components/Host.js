import React, { useState } from "react";
import "../App.css";
import HpBar from "./HpBar";

const Host = ({ host, question, hp }) => {
  return (
    <div id="hostContainer">
      <div id="hostBar">
        <div className="nameAndLvl">
          <span className="username">{host.name}</span>
          <span>Lv:29</span>
        </div>
        <label for="hpBar">HP</label>
        <HpBar variant="determinate" value={hp} />
        <div className="question">{question}</div>
      </div>
      <img id="hostImage" src="images/regis-philbin.png" alt="regis-philbin" />
    </div>
  );
};

export default Host;
