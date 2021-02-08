"use strict";
let cards = [
  { name: `coin-ten`, img: `assets/coin.png` },
  { name: `flower`, img: `assets/flower.png` },
  { name: `mushroom`, img: `assets/mushroom1.png` },
  { name: `one-up-chest`, img: `assets/one-up-chest.png` },
  { name: `star`, img: `assets/star.png` },
  { name: `twenty-coin`, img: `assets/twenty-coin.png` },
  { name: `coin-ten`, img: `assets/coin.png` },
  { name: `flower`, img: `assets/flower.png` },
  { name: `mushroom`, img: `assets/mushroom1.png` },
  { name: `one-up-chest`, img: `assets/one-up-chest.png` },
  { name: `star`, img: `assets/star.png` },
  { name: `twenty-coin`, img: `assets/twenty-coin.png` },
];
// EMPTY ARRAYS FOR MODIFICATIONS
let flippedCards = [];
let matches = 0;

// NAME THAT GRID
const grid = document.querySelector(`.grid`);
const main = document.querySelector(".page-container");
let startGame = document.querySelector(".start-button");
let startGame2 = document.querySelector(".start-button2");
let popUp = document.querySelector(".pop-up");
let popUp2 = document.querySelector(".pop-up-2");

// SHUFFLE THOSE CARDS
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
console.log(cards);

//BUILD GRID OF CARDS
const buildGrid = () => {
  shuffleArray(cards);
  grid.innerHTML = "";
  cards.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("flip-card");
    let innerCard = document.createElement("div");
    innerCard.classList.add("flip-card-inner");
    let frontCard = document.createElement("div");
    frontCard.classList.add("flip-card-front");
    frontCard.style.backgroundImage = `url(assets/n-spade.png)`;
    frontCard.setAttribute("data-match", item.name);
    let backCard = document.createElement("div");
    backCard.classList.add("flip-card-back");
    backCard.style.backgroundImage = `url(${item.img})`;
    // frontCard.append(frontImage);
    innerCard.append(frontCard, backCard);
    card.append(innerCard);
    grid.append(card);
  });
};
buildGrid();
// FLIP YOUR CARDS
//bubble with delegation
//if and only if I click on the card and itss face down and my flipped array is less than the array.length 2 then it will add card to array. it wont otherwise
grid.addEventListener("click", (e) => {
  if (e.target.classList.contains("flip-card-front")) {
    if (flippedCards.length === 0) {
      flippedCards.push(e.target);
      e.target.parentNode.classList.add("flip");
    } else if (flippedCards.length === 1) {
      flippedCards.push(e.target);
      e.target.parentNode.classList.add("flip");
      let firstCard = flippedCards[0].getAttribute("data-match");
      let secondCard = flippedCards[1].getAttribute("data-match");
      if (firstCard === secondCard) {
        console.log("MATCH!!! YO");
        flippedCards[0].parentNode.parentNode.classList.add("hide");
        flippedCards[1].parentNode.parentNode.classList.add("hide");
        flippedCards = [];
        matches++;
        if (matches === 6) {
          // popUp2.style.display = "visible";
          // const playAgain = document.createElement("button");
          // playAgain.textContent = "Play Again!";
          // resetButton();
          // youWon.append(resetButton);
          // main.append(youWon);
          console.log("You won, yo!");
          //stop timer
        }
      } else {
        console.log("NO MATCH YYO");
        setTimeout(() => {
          flippedCards[0].parentNode.classList.remove("flip");
          flippedCards[1].parentNode.classList.remove("flip");
          flippedCards = [];
        }, 800);
      }
    }
  }
});

//TIMER FUNCTION
let timer = document.querySelector(".timer");

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;

const timerStart = () => {
  const setTime = () => {
    if (matches === 6) {
      clearInterval(refreshTimer);
      console.log("I won");
    }
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  };
  let refreshTimer = setInterval(setTime, 1000);
  // if (matches === 6) {
  //   clearInterval(timerStart);
  // }
  let pad = (val) => {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  };
  // if (matches === 6) {
  //   clearInterval(timerStart);
  //   interval=0;
  // }
};

// RESTART GAME BUTTON

// const restartGame = () => {
//   let restartButton = document.querySelector(".reset-game");
//   restartButton.addEventListener(`click`, () => {
//     secondsLabel.innerText = "00";
//     minutesLabel.innerText = "00";
//     totalSeconds = 0;
//     matches = 0;
//     flippedCards = [];
//     const popUp = document.querySelector(".pop-up");
//     popUp.style.display = "none";
//   });
// };

// // RESET TIMERs
let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener(`click`, () => {
  secondsLabel.innerText = "00";
  minutesLabel.innerText = "00";
  totalSeconds = 0;
  matches = 0;
  flippedCards = [];
  // const popUp = document.querySelector(".pop-up");
  popUp.style.display = "none";
  // popUp2.style.display = "none";
  // main.youWon.style.display = "none";
  // main.remove(youWon);
  // timerStart();
  buildGrid();
  timerStart();
});

// PROBABLY OLD SSTUFF (reset)
// resetButton.addEventListener("clicked", () => {
//   seconds = 0;
//   minutes = 0;
//   hour = 0;
//   timer.innerHTML = "0:00";
//   clearInterval(interval);
// });

//START GAME FUNCTION

// let startGame = document.querySelector(".start-button");
// let popUp = document.querySelector(".pop-up");
let start = () => {
  startGame.addEventListener("click", () => {
    timerStart();
    popUp.style.display = "none";
    // popUp2.style.display = "none";
    grid.style.pointerEvents = "auto";
    // popUp2.style.display = "";
  });
};

// let start2 = () => {
//   startGame2.addEventListener("click", () => {
//     timerStart();
//     popUp2.style.display = "none";
//     start2();
//     grid.style.pointerEvents = "auto";
//     // popUp2.style.display = "";
//   });
// };
start();
let togglePlay = () => {
  var myAudio = document.getElementById("myAudio");
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
    myAudio.currentTime = 0;
  }
};
