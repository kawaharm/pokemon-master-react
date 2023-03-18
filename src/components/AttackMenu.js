import React, { useState } from "react";
import "../App.js";
import "../battleData.js";

const PlayMenu = ({ choices, backButton }) => {
  const [answer, setAnswer] = useState();
  const [verifyChoice, setVerifyChoice] = useState(false);
  const [correctChoiceSeq, setCorrectChoiceSeq] = useState(false);
  const [gameOverSeq, setGameOverSeq] = useState(false);

  const MENU_SELECT = {
    play: (
      <div id="playMenu" className="menu">
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
    ),
  };
  const handleChoice = (e) => {
    setAnswer(e.target.value);
    setVerifyChoice(true);
  };

  const handleFinalAnswer = () => {
    let message;
    if (answer) {
      // 1a. Play correct answer sound
      // 1b. Display "Its super effective" message
      message = "It's Super Effective!";
      // 1c. Reduce opponent's HP
      // 2. If opponent HP to zero, play victory sound and message
      // 2. If not, next question
    } else {
      message = "You have fainted!";
      // 1. Play GAME OVER message and sound
      // 2. Reset all stats
      // 2. Return to start screen
    }
  };

  return (
    <>
      {verifyChoice ? (
        <div id="verifyMenu" className="menu">
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
      ) : (
        <div id="playMenu" className="menu">
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
    </>
  );
};

export default PlayMenu;
