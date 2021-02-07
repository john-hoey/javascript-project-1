"use strict";
// let cards = [
//   { name: `coin-ten`, img: `/assets/coin.png` },
//   { name: `flower`, img: `/assets/flower.png` },
//   { name: `mushroom`, img: `/assets/mushroom.png` },
//   { name: `one-up-chest`, img: `/assets/one-up.png` },
//   { name: `star`, img: `/assets/one-up.png` },
//   { name: `twenty-coin`, img: `/assets/twenty-coin.png` },
//   { name: `coin-ten`, img: `/assets/coin.png` },
//   { name: `flower`, img: `/assets/flower.png` },
//   { name: `mushroom`, img: `/assets/mushroom.png` },
//   { name: `one-up-chest`, img: `/assets/one-up.png` },
//   { name: `star`, img: `/assets/one-up.png` },
//   { name: `twenty-coin`, img: `/assets/twenty-coin.png` },
// ];
let cards = [
  { name: `coin-ten`, img: `/assets/coin.png` },
  { name: `flower`, img: `/assets/flower.png` },
  { name: `mushroom`, img: `/assets/mushroom1.png` },
  { name: `one-up-chest`, img: `/assets/one-up-chest.png` },
  { name: `star`, img: `/assets/star.png` },
  { name: `twenty-coin`, img: `/assets/twenty-coin.png` },
  { name: `coin-ten`, img: `/assets/coin.png` },
  { name: `flower`, img: `/assets/flower.png` },
  { name: `mushroom`, img: `/assets/mushroom1.png` },
  { name: `one-up-chest`, img: `/assets/one-up-chest.png` },
  { name: `star`, img: `/assets/star.png` },
  { name: `twenty-coin`, img: `/assets/twenty-coin.png` },
];
// EMPTY ARRAYS FOR MODIFICATIONS
let cardData = [];
let flippedCards = [];
let matchCards = [];

// NAME THAT GRID
const grid = document.querySelector(`.grid`);

// SHUFFLE THOSE CARDS
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
// shuffleArray(cards);
console.log(cards);

//BUILD GRID OF CARDS
const buildGrid = () => {
  shuffleArray(cards);
  let i = 0;
  cards.forEach((card) => {
    let cardBox = document.createElement("img");
    // let cardIMG = document.createElement("img");
    cardBox.setAttribute(`data-id`, i);
    cardBox.classList.add(`card`);
    cardBox.addEventListener("click", cardFlip);
    // cardBox.appendChild(cardIMG);
    grid.appendChild(cardBox);
    i++;
  });
};
// FLIP YOUR CARDS
//bubble with delegation
//if and only if I click on the card and itss face down and my flipped array is less than the array.length 2 then it will add card to array. it wont otherwise

//
const cardFlip = (e) => {
  let cardId = e.target.getAttribute("data-id");
  flippedCards.push(cards[cardId].name);
  cardData.push(cardId);
  // change src to css
  e.target.setAttribute("src", cards[cardId].img);
  // grid.style.pointerEvents = "none";
  if (flippedCards.length === 2) {
    // setTimeout(matchLogic, 500);
  }
};
// console.log(cardFlip);
console.log(flippedCards);
buildGrid();

// const cardFlip = (e) => {
//   let cardId = e.target.getAttribute(`data-id`);
//   if (e.target.className === "card" && flippedCards.length < 2) {
//     flippedCards.push(e.target.cards[cardId].img);
//   }
//   //check length of flipped cards
//   if (flippedCards.length === 1) {
//     //e.target stop flip
//     //if/else (match or doesn't)
//     //matching function
//     //      if matching push to match array
//     if (
//       flippedCards[0].img === flippedCards[1].img &&
//       flippedCards[0].cardId !== flippedCards[1].cardId
//     ) {
//       matchCards.push(flippedCards);
//       flippedCards = [];
//       matchCards.classList.add("black");
//     } else {
//       setTimeout(() => {});
//       flip;
//     }
//     //unmatching function
//     //clear flipped cards array
//     flippedCards = [];
//   }
// };
// buildGrid();
// cardBox.addEventListener("click", cardFlip);

//-------------------------------------------------------------------------------------------------------------------
//SOME OTHER MATCHING LOGIC
// let matchLogic1 = () => {
//   if (
//     matchCards[0].class === matchCards[1].class &&
//     matchCards[0].id !== matchCards[1].id
//   ) {
//     matchCards[0].style.display = "black";
//     matchCards[1].style.display = "black";
//   } else {
//     matchCards[0].style.display = "card";
//     matchCards[1].style.display = "card";
//   }
// };
//-------------------------------------------------------------------------------------------------------------------

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
  seconds = 0;
  minutes = 0;
  hour = 0;
  timer.innerHTML = "0:00";
  //clearInterval(interval);
  popUp.style.display = "none";
  cardBox.style.background = assets / n - spade.png;
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
