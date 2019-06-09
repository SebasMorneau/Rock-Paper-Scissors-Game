let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "La Roche";
  if (letter === "p") return "Le Papier";
  return "Les Ciseaux";
}

function wins(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(userChoice)} Bat ${convertToWord(computerChoice)}. Vous Gagnez!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} Perd Contre ${convertToWord(computerChoice)}. Vous Perdez!`;
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `${convertToWord(userChoice)} Égale ${convertToWord(computerChoice)}. Égalité!`;
}



function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    wins(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
      break;
  }
}


function main(){
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
