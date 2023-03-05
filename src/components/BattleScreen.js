import React, { useState } from "react";
import "../App.css";
import BattleData from "../battleData";
import HpBar from "./HpBar";
import MainMenu from "./MainMenu";
import PlayMenu from "./PlayMenu";
import HelpMenu from "./HelpMenu";
import HintMenu from "./HintMenu";

const BattleScreen = ({ username }) => {
  const { host, user, questions } = BattleData;
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [showPlayMenu, setShowPlayMenu] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showHintMenu, setShowHintMenu] = useState(false);
  const [currentQuestion, setCurentQuestion] = useState(0);

  const handleMenuClick = (e) => {
    const choice = e.target.id;
    switch (choice) {
      case "play":
        setShowMainMenu(false);
        setShowPlayMenu(true);
        break;
      case "help":
        setShowMainMenu(false);
        setShowHelpMenu(true);
        break;
      case "hint":
        setShowMainMenu(false);
        setShowHintMenu(true);
        break;
      case "run":
        break;
      default:
        return;
    }
  };

  const handleBackButton = () => {
    setShowMainMenu(true);
    setShowPlayMenu(false);
    setShowHelpMenu(false);
    setShowHintMenu(false);
  };

  // const renderQuestionAndChoices = () => {
  //   setCurrentQuestion(questions)
  // }

  return (
    <div id="mainContainer" className="hidden">
      {/* <!-- Displays Host name, HP bar, questions, and image --> */}
      <div id="hostContainer">
        <div id="hostBar">
          <div className="nameAndLvl"></div>
          <label for="hpBar">HP</label>
          <HpBar variant="determinate" value={host.hpValue} />
          <div className="question">{questions[currentQuestion].q}</div>
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
        {showMainMenu && (
          <div id="mainMenu" className="menu hidden">
            <div id="captionBar">
              <h3 className="caption">What will {username} do?</h3>
            </div>
            <button
              id="play"
              className="choices"
              onClick={(e) => handleMenuClick(e)}
            >
              Play
            </button>
            <button
              id="help"
              className="choices"
              onClick={(e) => handleMenuClick(e)}
            >
              Help
            </button>
            <button
              id="hint"
              className="choices"
              onClick={(e) => handleMenuClick(e)}
            >
              Hint
            </button>
            <button
              id="run"
              className="choices"
              onClick={(e) => handleMenuClick(e)}
            >
              Run
            </button>
          </div>
        )}
        {/* <!-- PLAY MENU --> */}
        {showPlayMenu && (
          <PlayMenu
            answers={questions[currentQuestion].answers}
            backButton={handleBackButton}
          />
        )}
        {/* <!-- HELP MENU --> */}
        {showHelpMenu && <HelpMenu backButton={handleBackButton} />}
        {/* <!-- HINT MENU --> */}
        {showHintMenu && <HintMenu backButton={handleBackButton} />}
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
