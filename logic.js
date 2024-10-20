'use strict';

//variables needed
const maxScore = 50;
let score;
let highScore = 0;
let inputNumber;
let randomNumber;

//functions section

//to generate a number 
function generateNum(){
    randomNumber = Math.trunc(((Math.random()*50)+1));
}
//reset the score
function resetScore(){
    score = maxScore;
}

//to change background color and Message
function backgroundMessageChanger(color,text){
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.situation').textContent = text;
}

//display score
function operationOnScore(changeScore,changeHighScore = highScore){
    document.querySelector('.score-value').textContent = changeScore;
    document.querySelector('.high-score-value').textContent = changeHighScore;
}

// call for generate function when page is loaded
generateNum();
// call for setting score
resetScore();

//if user clicked on check button
document.querySelector('.check-btn').addEventListener('click',function (){
    // storing user input in variable 
    inputNumber = (Number)(document.querySelector('#input-num').value);
    //checking the input of user
    if(!inputNumber) {
        backgroundMessageChanger("orange","Invalid Input");
    }
    else {
        //checking user is not out of moves
        if (score !== 0){
            //comparing with generated number
            if (inputNumber !== randomNumber) {
            // using ternairy operator to tell whether input is high or low 
            backgroundMessageChanger("black",(inputNumber > randomNumber ? "High" : "Low"));
            score--;
            changeHighScore(score);
            }
            else {
                // if user won the background change to green and display you won in situation class tag 
                backgroundMessageChanger("green","You Won");
            }
        }
        else {
            //if user is lost then background color to red and diplay message and disable the check button
            backgroundMessageChanger("red","Out of Move Click on Again");
            document.querySelector('.check-btn').style.cursor = "not allowed";
        }
    }
});

document.querySelector('.again-btn').addEventListener('click',function(){
    //comparing current score with high score 
    if (score > highScore) {
        highScore = score;
    }
    //resetting the score
    resetScore();
    //changing things to normal as fresh game but updating score and highscore
    backgroundMessageChanger("black","Start Guess");
    changeHighScore(score,highScore);

    generateNum();
});