import React from "react";
import "../App.css";

const HintMenu = ({ backToMainMenu, availableHints, setAvailableHints }) => {
  return (
    <div id="hintMenu" className="menu hidden">
      {/* <!-- Displays "Lifelines" to help user answer question --> */}
      {/* <!-- Can only use each once per entire game --> */}
      <button
        id="fifty50"
        className="choices"
        disabled={!availableHints.fiftyFifty}
      >
        50:50
      </button>
      <button
        id="call-a-trainer"
        className="choices"
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
