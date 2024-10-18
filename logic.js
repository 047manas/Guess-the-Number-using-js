''
let score = 0;
const maxScore = 50;
let highScore = 0;
let inputNumber;
let randomNumber = Math.trunc(((Math.random()*50)+1));
console.log(randomNumber);
document.querySelector('.check-btn').addEventListener('click',function (){
    inputNumber = document.querySelector('#input-num').value;
    //checking the input of user
    if(!inputNumber) {
    document.querySelector('.situation').textContent = "invalid Input";
    }
    else {
        //checking user is not out of moves
        if (score < maxScore){
            //comparing with generated number
            if (inputNumber > randomNumber) {
            document.querySelector('.situation').textContent = "High";
            score++;
            document.querySelector('.score-value').textContent = maxScore-score;
            }
            else if (inputNumber < randomNumber) {
                document.querySelector('.situation').textContent = "Low";
                score++;
                document.querySelector('.score-value').textContent = maxScore-score;
            }
            else {
                document.querySelector('.situation').textContent = "You Won";
                document.querySelector('body').style.backgroundColor = 'green';
            }
        }
        else {
            document.querySelector('.situation').textContent = "Out of Moves Click Again!";
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.check-btn').style.cursor = "not allowed";
        }
    }
});

document.querySelector('.again-btn').addEventListener('click',function(){
    if ((maxScore-score) > highScore) {
        highScore = maxScore-score;
    }
    score = 0;
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.score-value').textContent = score;
    document.querySelector('.high-score-value').textContent = highScore;
});