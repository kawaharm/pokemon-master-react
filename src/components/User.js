import React from "react";
import "../App.css";

const User = ({ user, name, hp }) => {
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
          value={hp}
          min="0"
          max={user.hpMax}
        ></progress>
      </div>
    </div>
  );
};

export default User;
