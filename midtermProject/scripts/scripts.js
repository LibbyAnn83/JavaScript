
//initialize variables
let books = []; //array
let booksRead = 0
let percentage = 0;
let pagesRead = 0;
let userName = "";
let goal = 0;

const fNameInput = document.getElementById('fName');
const goalInput = document.getElementById('goal');

const form = document.getElementById('bookForm');
const cardContainer = document.getElementById('cardContainer');


//create class
class Book{
    constructor(title, author, pages, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
    }

}


//first form for user info
document.getElementById("submit").addEventListener("click", function(event){

    userName = fNameInput.value;
    goal = goalInput.value;

    // calculate stats
    booksRead = books.length;
    pagesRead = 0
    for (let i = 0; i < books.length; i++) {//loop to add total number of pages
    pagesRead += Number(books[i].pages)};
    percentage = (booksRead / goal) * 100;

    // update HTML
    document.getElementById("readingStats").innerHTML = `
        Welcome ${userName}! Your Reading Goal is ${goal} books. <br>
        You have read ${booksRead} this year.
    `;
    document.getElementById("readingStats2").innerHTML = `
        Progress towards goal: ${booksRead}/${goal} <br>
        You have completed ${percentage}% of your goal <br>
        You have read ${pagesRead} pages
    `;

    // hide disappear box
    document.querySelector('.disappear').style.display = 'none';
})

//second form for book info

document.getElementById("add").addEventListener("click", function(event){
    event.preventDefault(); // prevent page reload

    // Get values from the form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const genre = document.getElementById('genre').value;


    // Create a new Book instance
    const newBook = new Book(title, author, pages, genre);

    // Push it to the array
    books.push(newBook);

    // Display it in a card
    displayCard(newBook);

    // Clear the form
    form.reset();

    //calculations to update after each book entered
    booksRead = books.length; //number of books read = number of books added
    percentage = booksRead/goal*100; //calculation
    pagesRead = 0
    for (let i = 0; i < books.length; i++) {//loop to add total number of pages
    pagesRead += Number(books[i].pages)};

    //update readingStats after adding book
    document.getElementById("readingStats").innerHTML = `Welcome ${userName}! Your Reading Goal is ${goal} books. <br> You have read ${booksRead} this year.`;
    document.getElementById("readingStats2").innerHTML = `Progress towards goal: ${booksRead}/${goal} <br> You have completed ${percentage}% of your goal <br> You have read ${pagesRead} pages`;
    })


//display book information in html
function displayCard(book) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `<h2>${book.title}</h2>
        <p>${book.author} <br> ${book.pages} pages<br> ${book.genre}</p>`

    cardContainer.appendChild(card);
}