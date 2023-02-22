import React, { useState } from "react";
import BattleScreen from "./BattleScreen";
import { Container } from "@mui/material";
import "./App.css";

const StartMenu = () => {
  const [toggleBattleScreen, setToggleBattleScreen] = useState(false);
  const [username, setUsername] = useState("Pikachu");

  const handleSubmit = () => {
    setToggleBattleScreen(true);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Container maxWidth="lg">
      {!toggleBattleScreen && (
        <div id="startScreen">
          <div id="logo">
            <img src="images/game-logo.png" alt="game logo" />
          </div>
          <div id="input-form">
            <input
              id="input-text"
              type="text"
              onChange={handleChange}
              placeholder="Enter Username"
            />
            <input
              id="submit"
              type="button"
              value="LET'S PLAY!"
              onClick={handleSubmit}
            />
          </div>
        </div>
      )}
      {toggleBattleScreen && <BattleScreen username={username} />}
    </Container>
  );
};

export default StartMenu;
