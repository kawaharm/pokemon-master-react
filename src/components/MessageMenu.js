import React from "react";
import "../App.css";

const MessageMenu = ({ message }) => {
  return (
    <div id="messageMenu" className="menu">
      <h3 className="message">{message}</h3>
    </div>
  );
};

export default MessageMenu;
