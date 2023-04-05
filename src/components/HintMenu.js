import React from "react";
import "../App.css";

const HintMenu = ({ backToMainMenu, availableHints, setAvailableHints }) => {
  const handleHintSelection = (e) => {
    let selectedHint = e.target.id;
    if (selectedHint === "fifty50") {
      setAvailableHints({ ...availableHints, fiftyFifty: false });
    } else if (selectedHint === "call-a-trainer") {
      setAvailableHints({ ...availableHints, callATrainer: false });
    }
  };

  // User clicks 50:50 button -> Removes two random wrong answer choices
  const handleFiftyFifty = () => {
    // Pick number 0, 1, or 2 randomly and push onto empty array
    let randomArr = [];
    while (randomArr.length < 2) {
      let random = Math.floor(Math.random() * 3);
      // If IndexOf === -1, then element is not present
      if (randomArr.indexOf(random) === -1) {
        randomArr.push(random);
      }
    }
    // Hide two random answer choices from Play Menu
    // ..........
    // ..........
    // ..........
    // ..........
    setAvailableHints({ ...availableHints, fiftyFifty: false });
  };

  // User clicks Call A Trainer -> Reveals answer to question
  const handleCallATrainer = () => {
    // Display message briefly then return to Main Menu
    let count = 0;
    let displayMessage = setInterval(function () {
      message.textContent;
      if (count > 3) {
        clearInterval(displayMessage);
        updateMenu(6);
        messageNode.removeChild(message);
      }
      count++;
    }, 1000);
  };

  return (
    <div id="hintMenu" className="menu hidden">
      {/* <!-- Displays "Lifelines" to help user answer question --> */}
      {/* <!-- Can only use each once per entire game --> */}
      <button
        id="fifty50"
        className="choices"
        onClick={(e) => handleHintSelection(e)}
        disabled={!availableHints.fiftyFifty}
      >
        50:50
      </button>
      <button
        id="call-a-trainer"
        className="choices"
        onClick={(e) => handleHintSelection(e)}
        disabled={!availableHints.callATrainer}
      >
        Call A Trainer
      </button>
      <button className="backButton choices" onClick={backToMainMenu}>
        Back
      </button>
    </div>
  );
};

export default HintMenu;
