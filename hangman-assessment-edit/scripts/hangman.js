// declare and initialize array
let game = ["BASEBALL", "BASKETBALL", "FOOTBALL", "VOLLEYBALL", "SOCCER", "CHEER", "TRACK", "TENNIS", "FENCING", "GYMNASTICS"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
const array=[];

function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; 

    
    array.push(userLetter)
    let found = false;
    for (let c = 0; c < answer.length; c++) {
    
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
            
        }

        }

        if (found == false){
        attemptsLeft--;
        }

        document.getElementById("hangman").src = "images/0" + attemptsLeft + ".png";;

    for (let c = 0; c < answer.length; c++){output = output + display[c] + ' ';}

    if (win < 1) {
    document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
    document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
    document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

document.getElementById("guessed").innerHTML = array    
document.getElementById("word").innerHTML = output;
    output = '';
    //attemptsLeft--;

    
});
