import React, { useState } from "react";
import BattleScreen from "./BattleScreen";
import "./App.css";

const StartMenu = () => {
  const [toggleBattleScreen, setToggleBattleScreen] = useState(false);

  const handleSubmit = () => {
    setToggleBattleScreen(true);
  };

  return (
    <div>
      {!toggleBattleScreen && (
        <div id="startScreen">
          <div id="logo">
            <img src="images/game-logo.png" alt="game logo" />
          </div>
          <form id="input-form" autocomplete="off" onSubmit={handleSubmit}>
            <input id="input-text" type="text" placeholder="Enter Username" />
            <input id="submit" type="submit" value="LET'S PLAY!" />
          </form>
        </div>
      )}
      {toggleBattleScreen && <BattleScreen />}
    </div>
  );
};

export default StartMenu;
