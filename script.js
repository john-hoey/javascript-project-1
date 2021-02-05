`use strict`;

const matchGame = () => {
  // deck of cards array
  let cards = [
    { name: `coin-ten`, img: `/assets/coin.png` },
    { name: `flower`, img: `/assets/flower.png` },
    { name: `mushroom`, img: `/assets/mushroom.png` },
    { name: `one-up-chest`, img: `/assets/one-up.png` },
    { name: `star`, img: `/assets/one-up.png` },
    { name: `twenty-coin`, img: `/assets/twenty-coin.png` },
    { name: `coin-ten`, img: `/assets/coin.png` },
    { name: `flower`, img: `/assets/flower.png` },
    { name: `mushroom`, img: `/assets/mushroom.png` },
    { name: `one-up-chest`, img: `/assets/one-up.png` },
    { name: `star`, img: `/assets/one-up.png` },
    { name: `twenty-coin`, img: `/assets/twenty-coin.png` },
  ];
  let obnoxiouslyObviousNowThatYouThinkAboutItID = [];
  let flippedCards = [];
  let matchCards = [];
  const grid = document.querySelector(`.grid`);
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
  // Cards are deleting when double clicked
  const cardFlip = (e) => {
    let cardId = e.target.getAttribute("data-id");
    flippedCards.push(cards[cardId].name);
    obnoxiouslyObviousNowThatYouThinkAboutItID.push(cardId);
    e.target.setAttribute("src", cards[cardId].img);
    // grid.style.pointerEvents = "none";
    if (flippedCards.length === 2) {
      // setTimeout(matchLogic, 500);
    }
  };
  // console.log(cardFlip);

  const buildGrid = () => {
    shuffleArray(cards);
    let i = 0;
    cards.forEach((card) => {
      let cardBox = document.createElement(`div`);
      cardBox.setAttribute(`data-id`, i);
      cardBox.classList.add(`card`);
      cardBox.addEventListener("click", cardFlip);
      grid.appendChild(cardBox);
      i++;
    });
  };
  buildGrid();

  // let cardBox = document.createElement(`div`);

  // assignDiv();

  console.log(flippedCards);

  // let cardBox = document.createElement(`div`);
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
  //     cardBox.classList.add(`.black`);
  //   } else {
  //   }
  // };
  // console.log(matchCards);

  //----------------------------------------------------------------
  // shouldn't be able to click more than two cards at a time
  // let cardClassFlower = document.querySelector(``);

  // how do you see what you clicked? you can see what was clicked by e.target
  // did I click on a card? if I did. is it my first or second?

  // if ( matchCards.length === 2) {
  //   if (flippedCards[0]===flippedCards[1]){

  //   }
  // }

  //bubble with delegation
  //if and only if I click on the card and itss face down and my array iss less than the array.length 2 then it will add card to array. it wont otherwise

  //flipped array will be an array of flipped cards
  // let matchLogic1 = () => {
  //   if (
  //     matchCards[0].class === matchCards[1].class &&
  //     matchCards[0].id !== matchCards[1].id
  //   ) {
  //     matchCards[0].style.display = `black`;
  //     matchCards[1].style.display = `black`;
  //   } else {
  //     matchCards[0].style.display = `card`;
  //     matchCards[1].style.display = `card`;
  //   }
  // };

  let timer = document.querySelector(`.timer`);

  let minutesLabel = document.getElementById(`minutes`);
  let secondsLabel = document.getElementById(`seconds`);
  let totalSeconds = 0;

  const timerStart = () => {
    const setTime = () => {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    };
    setInterval(setTime, 1000);
    let pad = (val) => {
      let valString = val + ``;
      if (valString.length < 2) {
        return `0` + valString;
      } else {
        return valString;
      }
    };
  };

  let resetButton = document.querySelector(`.reset-button`);

  // RESET TIMER
  resetButton.addEventListener(`clicked`, () => {
    seconds = 0;
    minutes = 0;
    hour = 0;
    timer.innerHTML = `0:00`;
    clearInterval(interval);
  });

  let startGame = document.querySelector(`.start-button`);
  let popUp = document.querySelector(`.pop-up`);
  let start = () => {
    startGame.addEventListener(`click`, () => {
      timerStart();
      popUp.style.display = `none`;
      grid.style.pointerEvents = `auto`;
    });
  };

  start();
};
matchGame();
