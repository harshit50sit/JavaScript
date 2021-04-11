'use strict';
/*
console.log(document.querySelector('.message').textContent);
//Dom manipulation
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 23;

document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value = 22);

//Handling click events
*/

const secretNumber = Math.trunc(Math.random()*20)+1;//Number between 1 -20
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof(guess));

    if(!guess) {
        document.querySelector('.message').textContent =
        'No number😂';
    }
    else if (guess === secretNumber)
    {
        document.querySelector('.message').textContent = '🎉Correct Number!';
    }
    else if(guess > secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }       
        else{
            document.querySelector('.message').textContent = 'You lost the game';
        }
    }
        
    else if (guess < secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }       
        else{
            document.querySelector('.message').textContent = 'You lost the game';
        }
    }
})