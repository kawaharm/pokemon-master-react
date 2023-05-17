import React, { useState, useContext } from "react";
import Context from "./context/Context";
import BattleScreen from "./BattleScreen";
import { Container, Box } from "@mui/material";
import { suspenseSound } from "../soundEffects";
import gameLogo from "../images/game-logo.png";
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
            gap: 1,
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
          <Box sx={{ display: "grid", m: "auto", mt: 3 }}>
            <img src={gameLogo} alt="game logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
            <p className="warningMsg">
              * SOUND WARNING * This game contains sound effects. Please adjust
              volume as necessary for better gaming experience.
            </p>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default StartMenu;
