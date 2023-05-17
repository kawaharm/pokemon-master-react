/***********************************
 * ******** SOUND EFFECTS **********
 * *********************************/
let mainTheme = new Audio("/audio/main-theme.mp3"); // Start Screen music
mainTheme.volume = 0.3;
let suspenseSound = new Audio("/audio/lets-play.mp3"); // Play before every question
suspenseSound.volume = 0.3;
let questionSound = new Audio("/audio/question-music.mp3"); // Play during every question
questionSound.volume = 0.3;
let correctSound = new Audio("/audio/correct-answer.mp3"); // Play after correct guess results
correctSound.volume = 0.3;
let wrongSound = new Audio("/audio/wrong-answer.mp3"); // Play after wrong guess results
wrongSound.volume = 0.3;
let verifySound = new Audio("/audio/final-answer.mp3"); // Play during verifying ("Is this your final answer?")
verifySound.volume = 0.3;
let victorySound = new Audio("/audio/victory.mp3"); // Play during Victory sequence
victorySound.volume = 0.3;

// // Play main theme song at load
// mainTheme.addEventListener("loadeddata", function() {
//     this.play();
// })

export {
  mainTheme,
  suspenseSound,
  questionSound,
  correctSound,
  wrongSound,
  verifySound,
  victorySound,
};
