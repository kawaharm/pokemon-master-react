import React from "react";
import MessageMenu from "./MessageMenu";
import "../App.css";

const HintMenu = ({
  backToMainMenu,
  availableHints,
  setAvailableHints,
  choices,
}) => {
  const [hintMessage, setHintMessage] = useState("");

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
    let correctAnswer = choices.filter((ans) => ans.correct === true);
    console.log(correctAnswer);
    // let displayMessage = setInterval(function () {
    //   if (count > 3) {
    //     clearInterval(displayMessage);
    //     setMessage("");
    //     nextQuestion();
    //     backToMainMenu();
    //   }
    //   count++;
    // }, 1000);
  };

  return (
    <div id="hintMenu" className="menu hidden">
      {/* <!-- Displays "Lifelines" to help user answer question --> */}
      {/* <!-- Can only use each once per entire game --> */}
      <button
        id="fifty50"
        className="choices"
        onClick={handleFiftyFifty}
        disabled={!availableHints.fiftyFifty}
      >
        50:50
      </button>
      <button
        id="call-a-trainer"
        className="choices"
        onClick={handleCallATrainer}
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
