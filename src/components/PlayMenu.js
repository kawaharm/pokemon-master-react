import React, { useState } from "react";
import "../App.js";
import "../battleData.js";
import MessageMenu from "./MessageMenu.js";

const PlayMenu = ({ choices, backButton }) => {
  const [answer, setAnswer] = useState();
  const [menuChoice, setMenuChoice] = useState("attack");
  const [message, setMessage] = useState("");
  const [correctChoiceSeq, setCorrectChoiceSeq] = useState(false);
  const [gameOverSeq, setGameOverSeq] = useState(false);

  const handleFinalAnswer = () => {
    if (answer) {
      // 1a. Play correct answer sound
      // 1b. Display "Its super effective" message
      setMessage("It's Super Effective!");
      // 1c. Reduce opponent's HP
      // 2. If opponent HP to zero, play victory sound and message
      // 2. If not, next question
    } else {
      setMessage("You Have Fainted!");
      // 1. Play GAME OVER message and sound
      // 2. Reset all stats
      // 2. Return to start screen
    }
    setMenuChoice("result");
  };
  const MENU_SELECT = {
    attack: (
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
    verify: (
      <div id="verifyMenu" className="menu">
        <h3 id="verifyMessage" className="message">
          Is this your final answer?
        </h3>
        <button
          className="backButton choices"
          onClick={() => setMenuChoice("attack")}
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
    ),
    result: <MessageMenu message={message} />,
  };
  const handleChoice = (e) => {
    setAnswer(e.target.value);
    setMenuChoice("verify");
  };

  return <>{MENU_SELECT[menuChoice]}</>;
};

export default PlayMenu;
