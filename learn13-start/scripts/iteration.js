function load(){

/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const movies = ["K-Pop Demon Hunters","Zombies 4","Boss Baby", "Frozen", "LOL", "Zombies 3", "Zombies 2"];

let text = "";
for (const x of movies) {
  text += x + "<br>";
}

document.getElementById("list").innerHTML = text;



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

// Create a Set
const songs = new Set(["Row, Row, Row Your Boat","Baby Shark","Mary Had a Little Lamb", "The Alphabet Song", "B-I-N-G-O", "The Wheels on the Bus"]);


var text2 = "";
for (const x of songs) {
  text2 += x + "<br>";
}
document.getElementById("set1").innerHTML = text2;

// add two more songs to the set then display in the set2 paragraph

songs.add("Happy Birthday Song");
songs.add("Golden");
songs.add("Takedown");

var text2 =""
for (const x of songs) {
  text2 += x + "<br>";
}

document.getElementById("set2").innerHTML = text2;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const emails = new Map([
  ["Frodo Baggins", "f_baggins@theshire.com"],
  ["Bilbo Baggins", "beanbag@theshire.com"],
  ["Pippin Took", "foolofatook@theshire.com"],
  ["Gandalf", "Gandalf_the_Grey@theshire.com"],
  ["Sauron", "eye@theshire.com"]
]);

let text3 = "";
emails.forEach (function(value, key) {
  text3 += "name: " + key + " email: " + value + "<br>"
})

document.getElementById("map1").innerHTML = text3;

// add two new names and emails and display in map2 use the forEach() method

emails.set("Merry Brandybuck", "huckleberryferry@theshire.com");
emails.set("Aragorn", "ranger@theshire.com");

let text4 = "";
emails.forEach (function(value, key) {
  text4 += "name: " + key + " email: " + value + "<br>"
})

document.getElementById("map2").innerHTML = text4;

// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML = emails.get("Gandalf");


}