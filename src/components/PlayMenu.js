import React, { useState } from "react";
import "../App.js";
import "../battleData.js";

const PlayMenu = ({ choices, backButton }) => {
  const [answer, setAnswer] = useState();
  const [verifyMessage, setVerifyMessage] = useState(false);

  const handleChoice = (e) => {
    setAnswer(e.target.value);
    setVerifyMessage(true);
  };

  const handleFinalAnswer = () => {
    if (answer) {
    }
  };

  return (
    <>
      {!verifyMessage && (
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
      {verifyMessage && (
        <div id="verifyMenu" className="menu hidden">
          <h3 id="verifyMessage" className="message">
            Is this your final answer?
          </h3>
          <button
            className="backButton choices"
            onClick={() => setVerifyMessage(false)}
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
