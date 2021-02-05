"use strict";
// deck of cards array
let cards = [
  { name: "coin-ten", img: "/assets/coin.png" },
  { name: "flower", img: "/assets/flower.png" },
  { name: "mushroom", img: "/assets/mushroom.png" },
  { name: "one-up-chest", img: "/assets/one-up.png" },
  { name: "star", img: "/assets/one-up.png" },
  { name: "twenty-coin", img: "/assets/twenty-coin.png" },
  { name: "coin-ten", img: "/assets/coin.png" },
  { name: "flower", img: "/assets/flower.png" },
  { name: "mushroom", img: "/assets/mushroom.png" },
  { name: "one-up-chest", img: "/assets/one-up.png" },
  { name: "star", img: "/assets/one-up.png" },
  { name: "twenty-coin", img: "/assets/twenty-coin.png" },
];

let flippedCards = [];
const grid = document.querySelector(".grid");
// shuffling function using Durstenfeld shuffle
const shuffleArray = (array) => {
  {
    //loops through the array and sets j to be a random number between 0 and the length of the array.
    //assign the value of array[i] to array[j] and the value of array[j] to array[i].
    // translation:
    //It picks a random element for each original array element, and excludes it from the next draw, like picking randomly from a deck of cards.
    // This clever exclusion swaps the picked element with the current one, then picks the next random element from the remainder, looping backwards for optimal efficiency, ensuring the random pick is simplified (it can always start at 0), and thereby skipping the final element.
    // Algorithm runtime is O(n). Note that the shuffle is done in-place so if you don't want to modify the original array, first make a copy of it with .slice(0).

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
};

let matchCards = [];

// Cards are deleting when double clicked
const cardToggle = (e) => {
  let clickedCard = document.getElementById(e.target.id);
  e.target.classList.toggle(cards[e.target.id].name);
  if (flippedCards.length < 2) {
    flippedCards.push(clickedCard);
  } else {
    //------------------------------------------------------------------
    // (NOT CURRENTLY) Match logic----------~~~~~~----vvvvvvv-----~~~~~~---------vvvvvvv-------
    // If the classes of the first object in the flip card array is equal to the classes of the second object then we push those into matched cards AND their div id is not equal then we will execute our match. Other wise flip cards back.
    if (
      flippedCards[0].classList[flippedCards[0].classList] ===
      flippedCards[1].classList[flippedCards[1].classList]
    ) {
      matchCards.push(flippedCards[0]);
      matchCards.push(flippedCards[1]);
    }

    // if (matchCards[i].name === matchCards[i].name) {
    //   cardBox.classList.remove(cards[i].name);
    //   cardBox.classList.add(".black");
    // }
    // console.log(flippedCards);
    matchLogic1();
    // Grabs last class of class list and toggles it. length is always one higher than index, which is why we subtracted one
    flippedCards[0].classList.toggle(
      flippedCards[0].classList[flippedCards[0].classList.length - 1]
    );
    flippedCards[1].classList.toggle(
      flippedCards[1].classList[flippedCards[1].classList.length - 1]
    );
    flippedCards = [];
    // e.target.classList.toggle(cards[e.target.id].name);
    flippedCards.push(clickedCard);
    // e.target.classList.toggle(cards[e.target.id].name);
  }
};
// let cardBox = document.createElement("div");
const assignDiv = () => {
  shuffleArray(cards);
  let i = 0;
  cards.forEach((card) => {
    let cardBox = document.createElement("div");
    cardBox.setAttribute("id", i);
    cardBox.classList.add("card");
    cardBox.addEventListener("click", cardToggle);
    grid.appendChild(cardBox);
    i++;
  });
};
assignDiv();
// assignDiv();

console.log(flippedCards);

let cardBox = document.createElement("div");
//----------------------------------------------------------------
// spencer's match function
//----------------------------------------------------------------
// let matchLogic = () => {
//   if (
//     flippedCards[0].classList[flippedCards[0].classList] ===
//     flippedCards[1].classList[flippedCards[1].classList]
//   ) {
//     matchCards.push(flippedCards[0]);
//     matchCards.push(flippedCards[1]);
//   }
//   if (matchCards[0].name === matchCards[1].name) {
//     cardBox.classList.remove(matchCards[0].name);
//     cardBox.classList.remove(matchCards[1].name);
//     cardBox.classList.add(".black");
//   } else {
//   }
// };
// console.log(matchCards);

//----------------------------------------------------------------
// shouldn't be able to click more than two cards at a time
// let cardClassFlower = document.querySelector("");

// how do you see what you clicked? you can see what was clicked by e.target
// did I click on a card? if I did. is it my first or second?

// if ( matchCards.length === 2) {
//   if (flippedCards[0]===flippedCards[1]){

//   }
// }

//bubble with delegation
//if and only if I click on the card and itss face down and my array iss less than the array.length 2 then it will add card to array. it wont otherwise

//flipped array will be an array of flipped cards
let matchLogic1 = () => {
  if (
    matchCards[0].class === matchCards[1].class &&
    matchCards[0].id !== matchCards[1].id
  ) {
    matchCards[0].style.display = "black";
    matchCards[1].style.display = "black";
  } else {
    matchCards[0].style.display = "card";
    matchCards[1].style.display = "card";
  }
};
console.log(matchCards);
// stickyGrid();
