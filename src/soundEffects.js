import main from "./audio/main-theme.mp3";
import suspense from "./audio/lets-play.mp3";
import question from "./audio/question-music.mp3";
import correct from "./audio/correct-answer.mp3";
import wrong from "./audio/wrong-answer.mp3";
import verify from "./audio/final-answer.mp3";
import victory from "./audio/victory.mp3";

/***********************************
 * ******** SOUND EFFECTS **********
 * *********************************/
let mainTheme = new Audio(main); // Start Screen music
mainTheme.volume = 0.3;
let suspenseSound = new Audio(suspense); // Play before every question
suspenseSound.volume = 0.3;
let questionSound = new Audio(question); // Play during every question
questionSound.volume = 0.3;
let correctSound = new Audio(correct); // Play after correct guess results
correctSound.volume = 0.3;
let wrongSound = new Audio(wrong); // Play after wrong guess results
wrongSound.volume = 0.3;
let verifySound = new Audio(verify); // Play during verifying ("Is this your final answer?")
verifySound.volume = 0.3;
let victorySound = new Audio(victory); // Play during Victory sequence
victorySound.volume = 0.3;

export {
  mainTheme,
  suspenseSound,
  questionSound,
  correctSound,
  wrongSound,
  verifySound,
  victorySound,
};
