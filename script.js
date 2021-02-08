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
          console.log("You won, yo!");
          //stop timer
        }
      } else {
        console.log("NO MATCH YYO");
        setTimeout(() => {
          flippedCards[0].parentNode.classList.remove("flip");
          flippedCards[1].parentNode.classList.remove("flip");
          flippedCards = [];
        }, 500);
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
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  };
  setInterval(setTime, 1000);
  let pad = (val) => {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  };
};

// // RESET TIMER
let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener(`click`, () => {
  secondsLabel.innerText = "00";
  minutesLabel.innerText = "00";
  totalSeconds = 0;
  matches = 0;
  flippedCards = [];
  // let minutesLabel = document.getElementById("minutes");
  // let secondsLabel = document.getElementById("seconds");
  // minutesLabel = 0;
  // secondsLabel = 0;
  // seconds = 0;
  // minutes = 0;
  // hour = 0;
  // timer.innerHTML = "0:00";
  // clearInterval(interval);
  // popUp.style.display = "none";
  // cardBox.style.background = assets / n - spade.png;
  // grid.innerHTML = "";
  buildGrid();
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

let startGame = document.querySelector(".start-button");
let popUp = document.querySelector(".pop-up");
let start = () => {
  startGame.addEventListener("click", () => {
    timerStart();
    popUp.style.display = "none";
    grid.style.pointerEvents = "auto";
  });
};

start();
