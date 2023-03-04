import React from "react";
import "../App.css";

const MainMenu = ({ username }) => {
  return (
    <div id="mainMenu" className="menu hidden">
      <div id="captionBar">
        <h3 className="caption">What will {username} do?</h3>
      </div>
      <button id="play" className="choices">
        Play
      </button>
      <button id="help" className="choices">
        Help
      </button>
      <button id="hint" className="choices">
        Hint
      </button>
      <button id="run" className="choices">
        Run
      </button>
    </div>
  );
};

export default MainMenu;
