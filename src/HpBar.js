import React from "react";
import { LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const HpBar = styled(LinearProgress)(() => ({
  height: "15px",
  borderRadius: 10,
  "& .MuiLinearProgress-bar": {
    borderRadius: 10,
  },
}));

export default HpBar;
