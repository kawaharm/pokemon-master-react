import React from "react";
import "../App.css";

const MainMenu = ({ username }) => {
  const handleMenuClick = (e) => {
    console.log(e.target.id);
    const choice = e.target.id;
    switch (choice) {
      case "play":
        break;
      case "help":
        break;
      case "hint":
        break;
      case "run":
        break;
    }
  };

  return (
    <div id="mainMenu" className="menu hidden">
      <div id="captionBar">
        <h3 className="caption">What will {username} do?</h3>
      </div>
      <button id="play" className="choices" onClick={(e) => handleMenuClick(e)}>
        Play
      </button>
      <button id="help" className="choices" onClick={(e) => handleMenuClick(e)}>
        Help
      </button>
      <button id="hint" className="choices" onClick={(e) => handleMenuClick(e)}>
        Hint
      </button>
      <button id="run" className="choices" onClick={(e) => handleMenuClick(e)}>
        Run
      </button>
    </div>
  );
};

export default MainMenu;
