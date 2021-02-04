"use strict";

let cards = [
  { name: "coin", class: ".coin-ten" },
  { name: "flower", class: ".flower" },
  { name: "mushroom", class: ".mushroom" },
  { name: "one-up", class: ".one-up-chest" },
  { name: "star", class: ".star" },
  { name: "twenty-coin", class: ".coin-twenty" },
];

const shuffleArray = (array) => {
  {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      //   let temp = array[i];
      //   array[i] = array[j];
      //   array[j] = temp;
    }
  }
};
console.log(cards);
shuffleArray(cards);
