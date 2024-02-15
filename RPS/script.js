// HTML Element Variables
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var playerImgEl = document.getElementById("pChoiceImg");
var comImgEl = document.getElementById("cChoiceImg");
var pChoice = 0;
var comChoice = 0;
var pWin = document.getElementById("pScore");
var cWin = document.getElementById("cScore");
var Tie = document.getElementById("ties");

// Event Listeners
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);

// Event Functions
function playRock() {
  playerImgEl.src = "images/rock.png";
  pChoice = 1;

  // Computer Player
  comChoice = (Math.random() * 2 + 1).toFixed(0);
  if (comChoice == 1) {
    comImgEl.src = "images/rock.png";
  } else if (comChoice == 2) {
    comImgEl.src = "images/paper.png";
  } else {
    comImgEl.src = "images/scissors.png";
  }
  console.log(comChoice);

  if (comChoice == 3) {
    pWin.innerHTML++;
  } else if (comChoice == 2) {
    cWin.innerHTML++;
  } else if (comChoice == 1) {
    Tie.innerHTML++;
  }
  console.log(pWin.innerHTML);
  console.log(cWin.innerHTML);
}

function playPaper() {
  playerImgEl.src = "images/paper.png";
  pChoice = 2;

  // Computer Player
  comChoice = (Math.random() * 2 + 1).toFixed(0);
  if (comChoice == 1) {
    comImgEl.src = "images/rock.png";
  } else if (comChoice == 2) {
    comImgEl.src = "images/paper.png";
  } else {
    comImgEl.src = "images/scissors.png";
  }
  console.log(comChoice);

  if (comChoice == 3) {
    cWin.innerHTML++;
  } else if (comChoice == 1) {
    pWin.innerHTML++;
  } else if (comChoice == 2) {
    Tie.innerHTML++;
  }
  console.log(pWin.innerHTML);
  console.log(cWin.innerHTML);
}

function playScissors() {
  playerImgEl.src = "images/scissors.png";
  pChoice = 3;

  // Computer Player
  comChoice = (Math.random() * 2 + 1).toFixed(0);
  if (comChoice == 1) {
    comImgEl.src = "images/rock.png";
  } else if (comChoice == 2) {
    comImgEl.src = "images/paper.png";
  } else {
    comImgEl.src = "images/scissors.png";
  }
  console.log(comChoice);

  if (comChoice == 2) {
    pWin.innerHTML++;
  } else if (comChoice == 1) {
    cWin.innerHTML++;
  } else if (comChoice == 3) {
    Tie.InnerHTML++;
  }
  console.log(pWin.innerHTML);
  console.log(cWin.innerHTML);
}
