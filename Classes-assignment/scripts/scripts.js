function load(){
class Book{
    constructor(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
    }
    bookStats(){
        return `This book is ${this.genre} titled ${this.title}, it was written by ${this.author}, and it is ${this.pages} long.`
    }
}

const book1 = new Book("Never Touch an Axolotl", "Cara Jenkins", "children's", 10)

const book2 = new Book("Secret Nights and Northern Lights", "Megan Oliver", "contemporary romance", 384)

const book3 = new Book("Love's a Witch", "Tricia O'Malley", "Scottish romance", 320)

const book4 = new Book("Zomromcom", "Olivia Dade", "supernatural romance", 416)

document.getElementById("book1").innerHTML = book1.bookStats()
document.getElementById("book2").innerHTML = book2.bookStats()
document.getElementById("book3").innerHTML = book3.bookStats()
document.getElementById("book4").innerHTML = book4.bookStats()

}