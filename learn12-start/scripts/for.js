function load(){

// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
let text = ''
for (let i=99; i>1; i--){
    text += i + " bottles of beer on the wall. " + i + " bottles of beer. If one of the bottles should happen to fall, " + (i-1) + " bottles of beer on the wall. <br>"
}


document.getElementById("beer").innerHTML = text + "1 bottle of beer on the wall. 1 bottle of beer. If that bottle should happen to fall...then there's no more bottles of beer on the wall."

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let txt = "";
for (let x in months) {
  txt += months[x] + "<br>"; 
}

document.getElementById("for-in").innerHTML = txt;



// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let name = "BINGO";

let print = "";
for (let x of name) {
print += x + "<br>";
}

document.getElementById("for-of").innerHTML = print

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let i = 1;
let answer = '';
while (i < 51) {
  answer += "Number " + i + "<br>";
  i++;

document.getElementById("while").innerHTML = answer
}



}