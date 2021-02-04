"use strict";
// deck of cards array
let cards = [
  { name: "coin-ten", img: "/assets/coin.png" },
  { name: "flower", img: "/assets/flower.png" },
  { name: "mushroom", img: "/assets/mushroom.png" },
  { name: "one-up-chest", img: "/assets/one-up.png" },
  { name: "star", img: "/assets/one-up.png" },
  { name: "twenty-coin", img: "/assets/twenty-coin.png" },
  { name: "coin-ten2", img: "/assets/coin.png" },
  { name: "flower2", img: "/assets/flower.png" },
  { name: "mushroom2", img: "/assets/mushroom.png" },
  { name: "one-up-chest2", img: "/assets/one-up.png" },
  { name: "star2", img: "/assets/one-up.png" },
  { name: "twenty-coin2", img: "/assets/twenty-coin.png" },
];
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

const assignDiv = () => {
  shuffleArray(cards);
  let i = 0;
  cards.forEach((card) => {
    console.log(card.name);
    let cardBox = document.createElement("div");
    cardBox.setAttribute("id", i);
    cardBox.classList.add("card");
    // cardBox.classList.add(card.name);
    cardBox.classList.add("face-down");
    cardBox.addEventListener("click", (e) => {
      e.target.classList.toggle(cards[e.target.id].name);
    });
    grid.appendChild(cardBox);
    i++;
  });
};
assignDiv();
// let cardListener = document.getElementById();
// cardListener.addEventListener("click", (e) => {
//   e.target.classList.toggle(cards[e.target.id].name);
// });
// const flipCard = () => {
//   cards.forEach((card) => {
//     cardBox.classList.toggle("face-down");
//     cardBox.classList.toggle("face-up");
//     document.cardBox.style.backgroundImage.toggle = url(card.img);
//   });
// };
// assignDiv();
// let div2 = document.getElementsByClassName("card");
// div2.addEventListener("click", flipCard);
