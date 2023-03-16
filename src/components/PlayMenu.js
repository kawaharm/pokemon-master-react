import React, { useState } from "react";
import "../App.js";
import "../battleData.js";

const PlayMenu = ({ choices, backButton }) => {
  const [answer, setAnswer] = useState();
  const [verifyChoice, setVerifyChoice] = useState(false);

  const handleChoice = (e) => {
    setAnswer(e.target.value);
    setVerifyChoice(true);
  };

  const handleFinalAnswer = () => {
    if (answer) {
      // 1a. Play correct answer sound
      // 1b. Display "Its super effective" message
      // 1c. Reduce opponent's HP
      // 2. If opponent HP to zero, play victory sound and message
      // 2. If not, next question
    }
  };

  return (
    <>
      {!verifyChoice && (
        <div id="playMenu" className="menu hidden">
          {choices.map(({ choice, correct }, index) => {
            return (
              <button
                key={index}
                className="playButton choices"
                value={correct}
                onClick={(e) => {
                  handleChoice(e);
                }}
              >
                {choice}
              </button>
            );
          })}
          <button className="backButton choices" onClick={backButton}>
            Back
          </button>
        </div>
      )}
      {verifyChoice && (
        <div id="verifyMenu" className="menu hidden">
          <h3 id="verifyMessage" className="message">
            Is this your final answer?
          </h3>
          <button
            className="backButton choices"
            onClick={() => setVerifyChoice(false)}
          >
            Back
          </button>
          <button
            id="verifyButton"
            className="choices"
            onClick={() => handleFinalAnswer}
          >
            Yes
          </button>
        </div>
      )}
    </>
  );
};

export default PlayMenu;
