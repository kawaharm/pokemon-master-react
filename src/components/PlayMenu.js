import React, { useState, useContext } from "react";
import Context from "./context/Context.js";
import "../App.js";
import "../battleData.js";
import MessageMenu from "./MessageMenu.js";

const PlayMenu = ({
  choices,
  hostHp,
  damageHostHp,
  damageUserHp,
  nextQuestion,
  backToMainMenu,
}) => {
  const { setShowBattleScreen } = useContext(Context);
  const [answer, setAnswer] = useState();
  const [menuChoice, setMenuChoice] = useState("attack");
  const [message, setMessage] = useState("");
  let backToStartMenu = () => setShowBattleScreen(false);

  const handleChoice = (e) => {
    setAnswer(e.target.value === "true");
    setMenuChoice("verify");
    setMessage("Is this your final answer?");
  };

  const handleFinalAnswer = () => {
    if (answer) {
      // 1a. Play correct answer sound
      // 1b. Display "Its super effective" message
      correctAnswerSequence();
      // 1c. Reduce opponent's HP

      // 2. If opponent HP to zero, play victory sound and message
      // 2. If not, next question
    } else {
      gameOverSequence();
      // 1. Play GAME OVER message and sound
      // 2. Reset all stats
      // 2. Return to start screen
    }
    setMenuChoice("result");
  };

  const correctAnswerSequence = () => {
    damageHostHp();
    setMessage("It's Super Effective!");
    let count = 0;
    let displayMessage = setInterval(function () {
      if (count > 3) {
        clearInterval(displayMessage);
        setMessage("");
        nextQuestion();
        backToMainMenu();
      }
      count++;
    }, 1000);
    if (hostHp <= 0) {
      // Victory sequence
    }
  };

  const gameOverSequence = () => {
    damageUserHp();
    setMessage("You Have Fainted!");
    let count = 0;
    let displayMessage = setInterval(function () {
      if (count > 3) {
        clearInterval(displayMessage);
        setMessage("");
        backToStartMenu();
      }
      count++;
    }, 1000);
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
        <button className="backButton choices" onClick={backToMainMenu}>
          Back
        </button>
      </div>
    ),
    verify: (
      <MessageMenu
        message={message}
        choice={menuChoice}
        setMenuChoice={setMenuChoice}
        handleFinalAnswer={handleFinalAnswer}
      />
    ),
    result: <MessageMenu message={message} />,
  };

  return <>{MENU_SELECT[menuChoice]}</>;
};

export default PlayMenu;
