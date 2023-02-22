import React from "react";

const Test = () => {
  return (
    <div>
        {/* // <!-- START SCREEN --> */}
        <div id="startScreen">
            <div id="logo">
                <img src="img/game-logo.png" alt="game logo">
            </div>
            <form id="input-form" autocomplete="off">
                <input id="input-text" type="text" placeholder="Enter Username"/>
                <input id="submit" type="submit" value="LET'S PLAY!" />
            </form>
        </div>
        {/* <!-- MAIN SCREEN --> */}
        <div id="mainContainer" class="hidden">
            {/* <!-- Displays Host name, HP bar, questions, and image --> */}
            <div id="hostContainer">
                <div id="hostBar">
                    <div class="nameAndLvl"></div>
                    <label for="hpBar">HP</label>
                    <progress id="hostHp" class="hpBar" value="80" min="0" max="80"></progress>
                    <div class="question">      
                    </div>
                </div>
                <img id="hostImage" src="img/regis-philbin.png" alt="regis-philbin">
            </div>
            {/* <!-- Displays User name, HP bar, and image --> */}
            <div id="userContainer">
                <img id="userImage" src="img/pikachu.png" alt="pikachu">
                <div id="userBar">
                    <div class="nameAndLvl">
                        <span class="username">Username</span>
                        <span>Lv:29</span>
                    </div>
                    <label for="hpBar">HP</label>
                    <progress id="userHp" class="hpBar" value="80" min="0" max="80"></progress>
                </div>
            </div>
            {/* <!-- Displays battle options (PLAY, HELP, HINT, RUN) --> */}
            <div id="battleContainer">
                {/* <!-- MAIN MENU --> */}
                <div id="mainMenu" class="menu hidden">
                    <div id="captionBar">
                        {/* <!-- Add "What will USERNAME do?" here --> */}
                        <h3 class="caption"></h3>
                    </div>
                    <button id="play" class="choices">Play</button>
                    <button id="help" class="choices">Help</button>
                    <button id="hint" class="choices">Hint</button>
                    <button id="run" class="choices">Run</button>
                </div>
                {/* <!-- PLAY MENU --> */}
                <div id="playMenu" class="menu hidden">
                    {/* <!-- Displays answer choices --> */}
                    <button class="playButton choices">A: </button>
                    <button class="playButton choices">B: </button>
                    <button class="playButton choices">C: </button>
                    <button class="playButton choices">D: </button>
                    <button class="backButton choices">Back</button>
                </div>
                {/* <!-- HELP MENU --> */}
                <div id="helpMenu" class="menu hidden">
                    {/* <!-- Displays instructions  --> */}
                    <p id="howToPlay">HOW TO PLAY: <br>
                                    Answer each question correctly until Regis'
                                    HP bar goes to zero. Hints (50:50 - remove two random 
                                    answers, Call A Trainer - trainer gives you their best guess)
                                    can only be use once throughout entire game. Guess wrong
                                    once and its GAME OVER! 
                    </p>
                    <button class="backButton choices">Back</button>
                </div>
                {/* <!-- HINT MENU --> */}
                <div id="hintMenu" class="menu hidden">
                    {/* <!-- Displays "Lifelines" to help user answer question --> */}
                    {/* <!-- Can only use each once per entire game --> */}
                    <button id="fifty50" class="choices">50:50</button>
                    <button id="call-a-trainer" class="choices">Call A Trainer</button>
                    <button class="backButton choices">Back</button>
                </div>
                {/* <!-- MESSAGE MENU --> */}
                <div id="messageMenu" class="menu hidden">
                </div>
                {/* <!-- VERIFY MENU --> */}
                <div id="verifyMenu" class="menu hidden">
                    {/* <!-- Ask user to verify answer --> */}
                    <h3 id="verifyMessage" class="message">Is this your final answer?</h3>
                    <button class="backButton choices">Back</button>
                    <button id="verifyButton" class="choices">Yes</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Test;
