import React, { useState, useContext } from "react";
import Context from "./context/Context";
import "../App.css";
import BattleData from "../battleData";
import Host from "./Host";
import User from "./User";
import PlayMenu from "./PlayMenu";
import HelpMenu from "./HelpMenu";
import HintMenu from "./HintMenu";
import {
  correctSound,
  questionSound,
  suspenseSound,
  verifySound,
  victorySound,
  wrongSound,
} from "../soundEffects";

const BattleScreen = ({ username, setUsername }) => {
  const { host, user, questions } = BattleData;
  const { setShowBattleScreen, setRemoveChoices } = useContext(Context);
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [showPlayMenu, setShowPlayMenu] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showHintMenu, setShowHintMenu] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hostHp, setHostHp] = useState(host.hpValue);
  const [userHp, setUserHp] = useState(user.hpValue);
  const [availableHints, setAvailableHints] = useState({
    fiftyFifty: true,
    callATrainer: true,
  });
  let damageHostHp = () => setHostHp(hostHp - 12.5);
  let damageUserHp = () => setUserHp(0);
  let nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    // Deactivate 50-50 hint removal
    setRemoveChoices([]);
  };

  const mainMenuButtons = {
    play: "Play",
    help: "Help",
    hint: "Hint",
    run: "Run",
  };

  const name = username ? username : user.name;

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
        setUsername();
        setRemoveChoices([]);
        stopAudio();
        // Reset all data
        break;
      default:
        return;
    }
  };

  // Stop all sound effects
  const stopAudio = () => {
    suspenseSound.pause();
    suspenseSound.load();
    questionSound.pause();
    questionSound.load();
    correctSound.pause();
    correctSound.load();
    wrongSound.pause();
    wrongSound.load();
    verifySound.pause();
    verifySound.load();
    victorySound.pause();
    victorySound.load();
  };

  const handleBackToMainMenu = () => {
    setShowMainMenu(true);
    setShowPlayMenu(false);
    setShowHelpMenu(false);
    setShowHintMenu(false);
  };

  return (
    <div id="mainContainer" className="hidden">
      {/* <!-- Displays User name, HP bar, and image --> */}
      <Host host={host} question={questions[currentQuestion].q} hp={hostHp} />
      <User user={user} name={name} hp={userHp} />
      {/* <!-- Displays battle options (PLAY, HELP, HINT, RUN) --> */}
      <div id="battleContainer">
        {/* <!-- MAIN MENU --> */}
        {showMainMenu && (
          <div id="mainMenu" className="menu hidden">
            <div id="captionBar">
              <h3 className="caption">What will {name} do?</h3>
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
            backToMainMenu={handleBackToMainMenu}
            hostHp={hostHp}
            damageHostHp={damageHostHp}
            damageUserHp={damageUserHp}
            nextQuestion={nextQuestion}
          />
        )}
        {/* <!-- HELP MENU --> */}
        {showHelpMenu && <HelpMenu backToMainMenu={handleBackToMainMenu} />}
        {/* <!-- HINT MENU --> */}
        {showHintMenu && (
          <HintMenu
            backToMainMenu={handleBackToMainMenu}
            availableHints={availableHints}
            setAvailableHints={setAvailableHints}
            choices={questions[currentQuestion].answers}
          />
        )}
        {/* <!-- VERIFY MENU --> */}
      </div>
    </div>
  );
};

export default BattleScreen;
