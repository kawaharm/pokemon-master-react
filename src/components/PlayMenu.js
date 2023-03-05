import React from "react";
import "../App.js";
import "../battleData.js";

const PlayMenu = ({ answers, backButton }) => {
  return (
    <div id="playMenu" className="menu hidden">
      {/* <!-- Displays answer choices --> */}
      {answers.map(({ choice, correct }) => {
        return (
          <button
            key={answers.id}
            className="playButton choices"
            value={correct}
          >
            {choice}
          </button>
        );
      })}
      <button className="backButton choices" onClick={backButton}>
        Back
      </button>
    </div>
  );
};

export default PlayMenu;
