import React, { useState, useContext, useEffect } from "react";
import Context from "./context/Context.js";
import "../App.js";
import "../battleData.js";
import MessageMenu from "./MessageMenu.js";
import {
  questionSound,
  verifySound,
  correctSound,
  suspenseSound,
  wrongSound,
  victorySound,
} from "../soundEffects.js";

const PlayMenu = ({
  choices,
  hostHp,
  damageHostHp,
  damageUserHp,
  nextQuestion,
  backToMainMenu,
}) => {
  const { setShowBattleScreen, removeChoices, setRemoveChoices } =
    useContext(Context);
  const [answer, setAnswer] = useState();
  const [menuChoice, setMenuChoice] = useState("attack");
  const [message, setMessage] = useState("");
  let backToStartMenu = () => {
    setShowBattleScreen(false);
    setRemoveChoices([]);
  };

  const handleChoice = (e) => {
    setAnswer(e.target.value === "true");
    setMenuChoice("verify");
    setMessage("Is this your final answer?");
    questionSound.pause();
    questionSound.load();
    verifySound.play();
  };

  const handleFinalAnswer = () => {
    if (answer) {
      // 1a. Play correct answer sound
      correctAnswerSequence();
    } else {
      gameOverSequence();
    }
    setMenuChoice("result");
  };

  const correctAnswerSequence = () => {
    verifySound.pause();
    verifySound.load();
    correctSound.play();
    damageHostHp();
    setMessage("It's Super Effective!");
    let count = 0;
    let displayMessage = setInterval(function () {
      if (count > 3) {
        correctSound.pause();
        correctSound.load();
        suspenseSound.play();
        clearInterval(displayMessage);
        setMessage("");
        nextQuestion();
        backToMainMenu();
      }
      count++;
    }, 1000);
    if (hostHp <= 0) {
      // Victory sequence
      correctSound.pause();
      correctSound.load();
      victorySound.play();
      setMessage("You have defeated Regis!");
      let count = 0;
      let displayMessage = setInterval(function () {
        if (count > 3) {
          clearInterval(displayMessage);
          setMessage("");
          backToStartMenu();
        }
        count++;
      }, 1000);
    }
  };

  const gameOverSequence = () => {
    verifySound.pause();
    verifySound.load();
    wrongSound.play();
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
              id={`choice${index + 1}`}
              className={`playButton choices ${
                removeChoices.includes(index) && "hideChoice"
              }`}
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

  useEffect(() => {
    questionSound.play();
  }, []);

  return <>{MENU_SELECT[menuChoice]}</>;
};

export default PlayMenu;
