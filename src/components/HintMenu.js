import React, { useState, useContext } from "react";
import Context from "./context/Context";
import MessageMenu from "./MessageMenu";
import "../App.css";

const HintMenu = ({
  backToMainMenu,
  availableHints,
  setAvailableHints,
  choices,
}) => {
  const { setRemoveChoices } = useContext(Context);
  const [hintMessage, setHintMessage] = useState("");
  const [showHintMessage, setShowHintMessage] = useState(false);

  // User clicks 50:50 button -> Removes two random wrong answer choices
  const handleFiftyFifty = () => {
    // Pick number 0, 1, or 2 randomly and push onto empty array
    let wrongChoices = choices.filter((c) => c.correct === false);
    let wrongChoicesIdx = wrongChoices.map((wc) => {
      return choices.indexOf(wc);
    });
    // Remove a random index from the wrong choices
    let randomIdx = Math.floor(Math.random() * 3);
    wrongChoicesIdx.splice(randomIdx, 1);

    // Hide two random answer choices from Play Menu
    setRemoveChoices(wrongChoicesIdx);
    backToMainMenu();
    setAvailableHints({ ...availableHints, fiftyFifty: false });
  };

  // User clicks Call A Trainer -> Reveals answer to question
  const handleCallATrainer = () => {
    // Display message briefly then return to Main Menu
    let count = 0;
    let correctChoice = choices.find((ans) => ans.correct === true).choice;
    setHintMessage(`Trainer: I think its ${correctChoice}!`);
    setShowHintMessage(true);
    let displayMessage = setInterval(function () {
      if (count > 3) {
        clearInterval(displayMessage);
        setShowHintMessage(false);
        backToMainMenu();
      }
      count++;
    }, 1000);
    setAvailableHints({ ...availableHints, callATrainer: false });
  };

  return (
    <>
      {showHintMessage ? (
        <MessageMenu message={hintMessage} />
      ) : (
        <div id="hintMenu" className="menu">
          {/* <!-- Displays "Lifelines" to help user answer question --> */}
          {/* <!-- Can only use each once per entire game --> */}
          {availableHints.fiftyFifty && (
            <button
              id="fifty50"
              className="choices"
              onClick={handleFiftyFifty}
              disabled={!availableHints.fiftyFifty}
            >
              50:50
            </button>
          )}
          {availableHints.callATrainer && (
            <button
              id="call-a-trainer"
              className="choices"
              onClick={handleCallATrainer}
              disabled={!availableHints.callATrainer}
            >
              Call A Trainer
            </button>
          )}
          <button className="backButton choices" onClick={backToMainMenu}>
            Back
          </button>
        </div>
      )}
    </>
  );
};

export default HintMenu;
