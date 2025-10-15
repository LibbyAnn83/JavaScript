//onclick hide the form for getting started

const fNameInput = document.getElementById('fName');
const goalInput = document.getElementById('goal');

let readingStats = {
    name: "",
    goal: 0,
    booksRead: 0
}

document.getElementById("submit").addEventListener("click", function(event){

    const name = fNameInput.value;
    const goal = goalInput.value;

    document.getElementById("readingStats").innerHTML = `Welcome ${name}! Your Reading Goal is ${goal} books.`
    document.querySelector('.disappear').style.display = 'none';

}           
)