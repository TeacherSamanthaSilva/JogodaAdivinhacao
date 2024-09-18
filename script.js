const guessSection = document.querySelector("#guess-section");
const guessInput = document.querySelector("#guess");
const guessButton = document.querySelector("#guess-btn");
const resultParagraph = document.querySelector("#result");
const dificultySelect = document.querySelector("#dificulty");
const dificultySection = document.querySelector("#dificulty-section");
const gameSection = document.querySelector("#game-section");
const triesLeftSpan = document.querySelector("#tries-span");
const resetButton = document.querySelector("#reset-btn");

let maxtries;
let randomNumber;
let triesLeft;

dificultySelect.addEventListener("change", function(){

    const dificulty = parseInt(dificultySelect.value);

    switch (dificulty){

        case 1: 
            maxtries = 10; 
            break; 
        case 2 :
            maxtries = 7;
            break;
        case 3:
            maxtries = 5;
            break;
        default:
            maxtries = 10;
            break;
    }

    triesLeft = maxtries;
    triesLeftSpan.textContent(maxtries);

    randomNumber = Math.floor(Math.random() * 100) +1;

    dificultySection.computedStyleMap.
})