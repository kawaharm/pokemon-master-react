const BattleData = {
  host: {
    name: "Regis",
    level: 99,
    hpValue: 100,
    hpMax: 100,
  },
  user: {
    name: "Raichu",
    level: 1,
    hpValue: 100,
    hpMax: 100,
  },
  questions: [
    {
      q: "According to the old saying, what “is the root of all evil”?",
      answers: [
        { choice: "A: Food", correct: false },
        { choice: "B: Clothing", correct: false },
        { choice: "C: Money", correct: true },
        { choice: "D: Javascript", correct: false },
      ],
    },
    {
      q: "In the United States, what is traditionally the proper way to address a judge?",
      answers: [
        { choice: "A: Your Holiness", correct: false },
        { choice: "B: Your Honor", correct: true },
        { choice: "C: Your eminence", correct: false },
        { choice: "D: $ echo 'Yo Judge!'", correct: false },
      ],
    },
    {
      q: "This electric mouse is the best-known species in the widely-popular Pokemon franchise.",
      answers: [
        { choice: "A: Raichu", correct: false },
        { choice: "B: Thundercat", correct: false },
        { choice: "C: Logitech MX Master 3", correct: false },
        { choice: "D: Pikachu", correct: true },
      ],
    },
    {
      q: "HTML is the abbreviation for what standard web browser language?",
      answers: [
        { choice: "A: How To Measure Love", correct: false },
        { choice: "B: Holy Trinity Master Language", correct: false },
        { choice: "C: Ham Tomato Mustard Lettuce", correct: false },
        { choice: "D: Hypertext Markup Language", correct: true },
      ],
    },
    {
      q: "Who are two members of the organized crime syndicate Team Rocket?",
      answers: [
        { choice: "A: Bezos and Musk", correct: false },
        { choice: "B: Mario and Luigi", correct: false },
        { choice: "C: Jesse and James", correct: true },
        { choice: "D: Batman and Robin", correct: false },
      ],
    },
    {
      q: "Last year’s most visited website in the United States was:",
      answers: [
        { choice: "A: Google", correct: false },
        { choice: "B: Youtube", correct: true },
        { choice: "C: Facebook", correct: false },
        { choice: "D: Stack Overflow", correct: false },
      ],
    },
    {
      q: "Regis Philbin was born on Aug 25th, a birth date that is not shared by which celebrity?",
      answers: [
        { choice: "A: Will Smith", correct: true },
        { choice: "B: Blake Lively", correct: false },
        { choice: "C: Sean Connery", correct: false },
        { choice: "D: Billy Ray Cyrus", correct: false },
      ],
    },
    {
      q: "Fill in blank: There are ___ in the world: Those who understand binary, and those who don't.",
      answers: [
        { choice: "A: 2 kinds of people", correct: false },
        { choice: "B: 3 kinds of people", correct: false },
        { choice: "C: 10 kinds of people", correct: true },
        { choice: "D: 100 kinds of people", correct: false },
      ],
    },
  ],
};

export default BattleData;
