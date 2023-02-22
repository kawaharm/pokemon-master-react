import React from "react";
import "./App.css";

const BattleScreen = ({ username }) => {
  return (
    <div id="mainContainer" className="hidden">
      {/* <!-- Displays Host name, HP bar, questions, and image --> */}
      <div id="hostContainer">
        <div id="hostBar">
          <div className="nameAndLvl"></div>
          <label for="hpBar">HP</label>
          <progress
            id="hostHp"
            className="hpBar"
            value="80"
            min="0"
            max="80"
          ></progress>
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
        <div id="mainMenu" className="menu hidden">
          <div id="captionBar">
            {/* <!-- Add "What will USERNAME do?" here --> */}
            <h3 className="caption"></h3>
          </div>
          <button id="play" className="choices">
            Play
          </button>
          <button id="help" className="choices">
            Help
          </button>
          <button id="hint" className="choices">
            Hint
          </button>
          <button id="run" className="choices">
            Run
          </button>
        </div>
        {/* <!-- PLAY MENU --> */}
        <div id="playMenu" className="menu hidden">
          {/* <!-- Displays answer choices --> */}
          <button className="playButton choices">A: </button>
          <button className="playButton choices">B: </button>
          <button className="playButton choices">C: </button>
          <button className="playButton choices">D: </button>
          <button className="backButton choices">Back</button>
        </div>
        {/* <!-- HELP MENU --> */}
        <div id="helpMenu" className="menu hidden">
          {/* <!-- Displays instructions  --> */}
          <p id="howToPlay">
            HOW TO PLAY: <br />
            Answer each question correctly until Regis' HP bar goes to zero.
            Hints (50:50 - remove two random answers, Call A Trainer - trainer
            gives you their best guess) can only be use once throughout entire
            game. Guess wrong once and its GAME OVER!
          </p>
          <button className="backButton choices">Back</button>
        </div>
        {/* <!-- HINT MENU --> */}
        <div id="hintMenu" className="menu hidden">
          {/* <!-- Displays "Lifelines" to help user answer question --> */}
          {/* <!-- Can only use each once per entire game --> */}
          <button id="fifty50" className="choices">
            50:50
          </button>
          <button id="call-a-trainer" className="choices">
            Call A Trainer
          </button>
          <button className="backButton choices">Back</button>
        </div>
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
