

function addme() {
    const person = {};
    person.firstName = document.getElementById("fname").value;
    person.lastName = document.getElementById("lname").value;
    person.email = document.getElementById("email").value;
    person.phone = document.getElementById("phone").value;

    const jStringify = JSON.stringify(person);

    document.getElementById("json-value").innerHTML = jStringify
}