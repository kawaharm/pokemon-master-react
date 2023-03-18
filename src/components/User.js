import React from "react";
import "../App.css";

const User = ({ name }) => {
  return (
    <div id="userContainer">
      <img id="userImage" src="images/pikachu.png" alt="pikachu" />
      <div id="userBar">
        <div className="nameAndLvl">
          <span className="username">{name}</span>
          <span>Lv:29</span>
        </div>
        <label for="hpBar">HP</label>
        <progress
          id="userHp"
          className="hpBar"
          value="80"
          min="0"
          max="80"
        ></progress>
      </div>
    </div>
  );
};

export default User;
