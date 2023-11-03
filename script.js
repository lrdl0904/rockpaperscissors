const rock = document.querySelector(".rock-choice");
const paper = document.querySelector(".paper-choice");
const scissors = document.querySelector(".scissors-choice");

let randomnumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let x = 0;

// for clicking the png
rock.addEventListener("click", function () {
  paper.style.display = "none";
  scissors.style.display = "none";
  rock.classList.add("rotate");
  x = 1;
  winCheck(x, randomnumber);
  displayOpponent(randomnumber);
});

paper.addEventListener("click", function () {
  rock.style.display = "none";
  scissors.style.display = "none";
  paper.classList.add("rotate");
  x = 2;
  winCheck(x, randomnumber);
  displayOpponent(randomnumber);
});

scissors.addEventListener("click", function () {
  rock.style.display = "none";
  paper.style.display = "none";
  scissors.classList.add("rotate");
  x = 3;
  winCheck(x, randomnumber);
  displayOpponent(randomnumber);
});

//winning condition
function winCheck(x, randomnumber) {
  if (x === 1 && randomnumber === 1) {
    removeHover();
    draw();
  } else if (x === 1 && randomnumber === 2) {
    removeHover();
    lose();
  } else if (x === 1 && randomnumber === 3) {
    removeHover();
    win();
  } else if (x === 2 && randomnumber === 1) {
    removeHover();
    win();
  } else if (x === 2 && randomnumber === 2) {
    removeHover();
    draw();
  } else if (x === 2 && randomnumber === 3) {
    removeHover();
    lose();
  } else if (x === 3 && randomnumber === 1) {
    removeHover();
    lose();
  } else if (x === 3 && randomnumber === 2) {
    removeHover();
    win();
  } else if (x === 3 && randomnumber === 3) {
    removeHover();
    draw();
  }
}

function displayOpponent(randomnumber) {
  if (randomnumber === 1) {
    document.querySelector(".enemy--1").classList.remove("hidden");
    document.querySelector(".enemy--1").classList.add("rotateRight");
  } else if (randomnumber === 2) {
    document.querySelector(".enemy--2").classList.remove("hidden");
    document.querySelector(".enemy--2").classList.add("rotateRight");
  } else {
    document.querySelector(".enemy--3").classList.remove("hidden");
    document.querySelector(".enemy--3").classList.add("rotateRight");
  }
}

// remove hover

function removeHover() {
  document.querySelector(".choices").classList.remove("nohover");
}

//winning message

function win() {
  document.querySelector(".you--win").classList.remove("hidden");
}

function lose() {
  document.querySelector(".you--lose").classList.remove("hidden");
}

function draw() {
  document.querySelector(".draw").classList.remove("hidden");
}

//for Play Again

document.querySelector(".btn").addEventListener("click", function () {
  randomnumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  rock.style.display = "none";
  paper.style.display = "none";
  scissors.style.display = "none";
  document.querySelector(".enemy--1").classList.add("hidden");
  document.querySelector(".enemy--2").classList.add("hidden");
  document.querySelector(".enemy--3").classList.add("hidden");
  document.querySelector(".you--win").classList.add("hidden");
  document.querySelector(".you--lose").classList.add("hidden");
  document.querySelector(".draw").classList.add("hidden");
  reset();
});

function reset() {
  document.querySelector(".choices").style.display = "flex";
  document.querySelector(".choices").classList.add("nohover");

  rock.style.display = "unset";
  paper.style.display = "unset";
  scissors.style.display = "unset";

  if (x === 1) {
    rock.classList.remove("rotate");
  } else if (x === 2) {
    paper.classList.remove("rotate");
  } else if (x === 3) {
    scissors.classList.remove("rotate");
  }
}
