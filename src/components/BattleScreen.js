import React, { useState } from "react";
import "../App.css";
import BattleData from "../battleData";
import Host from "./Host";
import User from "./User";
import PlayMenu from "./PlayMenu";
import HelpMenu from "./HelpMenu";
import HintMenu from "./HintMenu";

const BattleScreen = ({ username, setShowBattleScreen }) => {
  const { host, user, questions } = BattleData;
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [showPlayMenu, setShowPlayMenu] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showHintMenu, setShowHintMenu] = useState(false);
  const [currentQuestion, setCurentQuestion] = useState(0);
  const [correctGuess, setCorrectGuess] = useState();

  const mainMenuButtons = {
    play: "Play",
    help: "Help",
    hint: "Hint",
    run: "Run",
  };

  const handleMenuClick = (e) => {
    const choice = e.target.id;
    setShowMainMenu(false);
    switch (choice) {
      case "play":
        setShowPlayMenu(true);
        break;
      case "help":
        setShowHelpMenu(true);
        break;
      case "hint":
        setShowHintMenu(true);
        break;
      case "run":
        setShowBattleScreen(false);
        // Reset all data
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

  return (
    <div id="mainContainer" className="hidden">
      {/* <!-- Displays User name, HP bar, and image --> */}
      <Host host={host} question={questions[currentQuestion].q} />
      <User name={username ? username : user.name} />
      {/* <!-- Displays battle options (PLAY, HELP, HINT, RUN) --> */}
      <div id="battleContainer">
        {/* <!-- MAIN MENU --> */}
        {showMainMenu && (
          <div id="mainMenu" className="menu hidden">
            <div id="captionBar">
              <h3 className="caption">
                What will {username ? username : user.name} do?
              </h3>
            </div>
            {Object.entries(mainMenuButtons).map(([id, button], index) => (
              <button
                key={index}
                id={id}
                className="choices"
                onClick={(e) => handleMenuClick(e)}
              >
                {button}
              </button>
            ))}
          </div>
        )}
        {/* <!-- PLAY MENU --> */}
        {showPlayMenu && (
          <PlayMenu
            choices={questions[currentQuestion].answers}
            backButton={handleBackButton}
            correctGuess={setCorrectGuess}
          />
        )}
        {/* <!-- HELP MENU --> */}
        {showHelpMenu && <HelpMenu backButton={handleBackButton} />}
        {/* <!-- HINT MENU --> */}
        {showHintMenu && <HintMenu backButton={handleBackButton} />}
        {/* <!-- VERIFY MENU --> */}
      </div>
    </div>
  );
};

export default BattleScreen;
