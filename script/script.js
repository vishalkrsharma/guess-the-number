'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

const updateValue = function (selector,value) {
    document.querySelector(selector).textContent = value;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    //When no input given
    if(!guess) {
        updateValue('.message','🔴 No Number!');
    }
    
    //When input equals secret number
    else if(guess === secretNumber){
        updateValue('.message', '🎉Correct Number!');
        updateValue('.number',secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347' ;
        document.querySelector('.number').style.width='30rem';

        //When highscore is hit
        if(score > highScore){
            highScore=score;
            updateValue('.highscore',score);
        }
    }
    
    //When input not equals secret number
    else if(guess !== secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = (guess > secretNumber) ? '👆 Too High!' : '👇 Too Low!';
            score--;
            updateValue('.score',score);
        }else{
            updateValue('.message','😓 You Lost!');
        }
        
    }
});

//To play again
document.querySelector('.again').addEventListener('click', 
function() {
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    updateValue('.message', 'Start Guessing...');
    updateValue('.score', score);
    updateValue('.number', '?');
    updateValue('.guess','');
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});