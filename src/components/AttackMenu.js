import React, { useState } from "react";
import "../App.js";

const AttackMenu = ({}) => {
  return (
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
  );
};

export default AttackMenu;
