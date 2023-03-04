import React from "react";
import "../App.css";
import BattleData from "../battleData";
import HpBar from "./HpBar";
import MainMenu from "./MainMenu";
import PlayMenu from "./PlayMenu";
import HelpMenu from "./HelpMenu";
import HintMenu from "./HintMenu";

const BattleScreen = ({ username }) => {
  const { host, user, questions } = BattleData;
  return (
    <div id="mainContainer" className="hidden">
      {/* <!-- Displays Host name, HP bar, questions, and image --> */}
      <div id="hostContainer">
        <div id="hostBar">
          <div className="nameAndLvl"></div>
          <label for="hpBar">HP</label>
          <HpBar variant="determinate" value={host.hpValue} />
          <div className="question"></div>
        </div>
        <img
          id="hostImage"
          src="images/regis-philbin.png"
          alt="regis-philbin"
        />
      </div>
      {/* <!-- Displays User name, HP bar, and image --> */}
      <div id="userContainer">
        <img id="userImage" src="images/pikachu.png" alt="pikachu" />
        <div id="userBar">
          <div className="nameAndLvl">
            <span className="username">{username}</span>
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
      {/* <!-- Displays battle options (PLAY, HELP, HINT, RUN) --> */}
      <div id="battleContainer">
        {/* <!-- MAIN MENU --> */}
        <MainMenu username={username} />
        {/* <!-- PLAY MENU --> */}
        <PlayMenu />
        {/* <!-- HELP MENU --> */}
        <HelpMenu />
        {/* <!-- HINT MENU --> */}
        <HintMenu />
        {/* <!-- MESSAGE MENU --> */}
        <div id="messageMenu" className="menu hidden"></div>
        {/* <!-- VERIFY MENU --> */}
        <div id="verifyMenu" className="menu hidden">
          {/* <!-- Ask user to verify answer --> */}
          <h3 id="verifyMessage" className="message">
            Is this your final answer?
          </h3>
          <button className="backButton choices">Back</button>
          <button id="verifyButton" className="choices">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BattleScreen;
