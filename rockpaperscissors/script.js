const player1Element = document.getElementById("player1");
const player2Element = document.getElementById("player2");
const loseElement = document.getElementById("lose");
const winElement = document.getElementById("win");
const drawElement = document.getElementById("draw");

// Spil spillet og vælg din hånd
function play(playerChoice) {
  // Fjern classes
  player1Element.classList.remove("shake");
  player2Element.classList.remove("shake");

  // computer valg (random)
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // spiller valg
  player1Element.className = `player ${playerChoice}`;
  player2Element.className = `player ${computerChoice}`;

  // hvem vinder?
  if (playerChoice === computerChoice) {
    // Draw
    animateElements(drawElement);
  } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
    // Win
    animateElements(winElement);
  } else {
    // Lose
    animateElements(loseElement);
  }

  // Reset
  setTimeout(() => {
    loseElement.classList.add("hidden");
    winElement.classList.add("hidden");
    drawElement.classList.add("hidden");
  }, 300);
}

function animateElements(resultMessageElement) {
  // animation
  setTimeout(() => {
    player1Element.classList.add("shake");
    player2Element.classList.add("shake");
  });

  // fjern animation og tilføj win title med delay
  setTimeout(() => {
    player1Element.classList.remove("shake");
    player2Element.classList.remove("shake");
    resultMessageElement.classList.remove("hidden");
  }, 2300);
}
