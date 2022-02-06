'use strict';
let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener('click', function (){
const guess = Number(document.querySelector(".guess").value);

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

        // when no input
    if(!guess){
        displayMessage("NO Number!!!");
        // when correct answer
    } else if (guess === secretNumber) {
        displayMessage("Correct Answer!!!");
        document.querySelector("body").style.backgroundColor = "#30b347"; // background color green 
        document.querySelector(".number").style.width = "30rem"; 
        document.querySelector(".number").textContent = secretNumber;
        

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if(score > 1){
            displayMessage(guess > secretNumber ? "Too High!" : "Too Low!"); 
            score--;
            document.querySelector(".score").textContent = score;
        }else {
            displayMessage("You lost the Game!");
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?"
});
