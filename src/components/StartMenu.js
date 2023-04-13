import React, { useState, useContext } from "react";
import Context from "./context/Context";
import BattleScreen from "./BattleScreen";
import { Container, Box, Item } from "@mui/material";
import { suspenseSound } from "../soundEffects";
import "../App.css";

const StartMenu = () => {
  const [username, setUsername] = useState();
  const { showBattleScreen, setShowBattleScreen } = useContext(Context);

  const handleSubmit = () => {
    setShowBattleScreen(true);
    suspenseSound.play();
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Container maxWidth="lg">
      {showBattleScreen ? (
        <BattleScreen username={username} setUsername={setUsername} />
      ) : (
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
    </Container>
  );
};

export default StartMenu;
