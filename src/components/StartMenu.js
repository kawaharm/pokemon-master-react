import React, { useState } from "react";
import BattleScreen from "./BattleScreen";
import { Container, Box, Item } from "@mui/material";
import "../App.css";

const StartMenu = () => {
  const [showBattleScreen, setShowBattleScreen] = useState(false);
  const [username, setUsername] = useState("Pikachu");

  const handleSubmit = () => {
    setShowBattleScreen(true);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Container maxWidth="lg">
      {!showBattleScreen && (
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
          <Box sx={{ display: "grid", m: "auto" }}>
            <img src="images/game-logo.png" alt="game logo" />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridAutoRows: "1fr",
            }}
          >
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
          </Box>
        </Box>
      )}
      {showBattleScreen && (
        <BattleScreen
          username={username}
          setShowBattleScreen={setShowBattleScreen}
        />
      )}
    </Container>
  );
};

export default StartMenu;
