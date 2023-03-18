import React from "react";
import "../App.css";

const MessageMenu = ({ message, choice, setMenuChoice, handleFinalAnswer }) => {
  return (
    <div className="menu">
      <h3 className="message">{message}</h3>
      {choice === "verify" && [
        <button
          className="backButton choices"
          onClick={() => setMenuChoice("attack")}
        >
          Back
        </button>,
        <button
          id="verifyButton"
          className="choices"
          onClick={handleFinalAnswer}
        >
          Yes
        </button>,
      ]}
    </div>
  );
};

export default MessageMenu;
