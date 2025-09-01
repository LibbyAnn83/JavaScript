// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = firstName;
    document.getElementById("nick-name").innerHTML = name;

}

function scope() {
    //fix the errors 
    document.getElementById("global").innerHTML = name1;
    firstName = "Meredith";
    document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    var taxRateNew = .08
    document.getElementById("new-tax").innerHTML = taxRateNew;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2="Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}


function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breeds = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("breeds").innerHTML = breeds;
    document.getElementById("pi").innerHTML = PI;
    
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 +32;
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 10 - 32;
    document.getElementById("subtraction").innerHTML = "10 - 32 = " + subtraction;
    let multiplication = 2 * 2;
    document.getElementById("multiplication").innerHTML = "2 * 2 = " + multiplication;
    let exponent = 3 ** 3;
    document.getElementById("exponent").innerHTML = "3^3 = " + exponent;
    let division = 49/7;
    document.getElementById("division").innerHTML = "49/7 = " + division;
    let remainder = 12 % 5;
    document.getElementById("modulus").innerHTML = "remainder of 12/5 = " + remainder;
    let num1 = 32;
        num1++;
    document.getElementById("increment").innerHTML = "32 incremented = " + num1;
    let num2 = 32;
    num2--;
    document.getElementById("decrement").innerHTML = "32 -- decremented = " + num2;
}   

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10 " + "x = " + x;
    x +=1
    document.getElementById("plus-equals").innerHTML = "x += 1 = " + x;
    var x = 10
    x -=1
    document.getElementById("minus-equals").innerHTML = "x -= 1 = " + x;
    var x = 10
    x *=2
    document.getElementById("times-equals").innerHTML = "x *= 2 = " + x;
    var x = 10
    x /=2
    document.getElementById("divide-equals").innerHTML = "x /= 2 = " + x;
    var x = 10
    x %=2
    document.getElementById("modulus-equals").innerHTML = "x %= 2 = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const games = ["Zelda BOTW", "Mario Kart", "Zelda TOTK"];
    document.getElementById("array").innerHTML = games;
    const character = {firstName:"Zelda", position:"Princess of Hyrule", game:"Legend of Zelda"}
    document.getElementById("object").innerHTML = character.firstName + " in the game " + character.game + " is " + character.position + ".";
}
