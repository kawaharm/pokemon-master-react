import React from "react";
import "../App.css";

const HelpMenu = ({ backButton }) => {
  return (
    <div id="helpMenu" className="menu hidden">
      {/* <!-- Displays instructions  --> */}
      <p id="howToPlay">
        HOW TO PLAY: <br />
        Answer each question correctly until Regis' HP bar goes to zero. Hints
        (50:50 - remove two random answers, Call A Trainer - trainer gives you
        their best guess) can only be use once throughout entire game. Guess
        wrong once and its GAME OVER!
      </p>
      <button className="backButton choices" onClick={backButton}>
        Back
      </button>
    </div>
  );
};

export default HelpMenu;
