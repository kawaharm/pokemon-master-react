import React, { useState } from "react";
import BattleScreen from "./BattleScreen";
import { Container, Box } from "@mui/material";
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
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "0.75fr, 0.25fr",
            gap: 10,
            height: 800,
            width: 1000,
            mx: "auto",
            my: 2,
            background:
              "linear-gradient(-45deg, #49256d, #976dc1, #6c4a8e, #49256d)",
            border: 3,
            borderColor: "text.primary",
          }}
        >
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
        </Box>
      )}
      {toggleBattleScreen && <BattleScreen username={username} />}
    </Container>
  );
};

export default StartMenu;
