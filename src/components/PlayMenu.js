import React from "react";
import "../App.js";

const PlayMenu = () => {
  return (
    <div id="playMenu" className="menu hidden">
      {/* <!-- Displays answer choices --> */}
      <button className="playButton choices">A: </button>
      <button className="playButton choices">B: </button>
      <button className="playButton choices">C: </button>
      <button className="playButton choices">D: </button>
      <button className="backButton choices">Back</button>
    </div>
  );
};

export default PlayMenu;
