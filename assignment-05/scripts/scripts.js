
function load(){
    let holidays = '';
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    for (let month=1; month<13; month++){
    
    holidays += "<br>The holidays for " + monthNames[month-1] + " are: <br>"

switch(month){
    case 1:
        holidays += "New Years Day <br>"
        holidays += "Martin Luther King Jr. Day <br>"
        holidays += "National Hot Chocolate Day <br>"
        break;
    case 2:
        holidays += "Valentine's Day <br>"
        holidays += "Presidents' Day <br>"
        holidays += "National Random Act of Kindness Day <br>"
        break;
    case 3:
        holidays += "Pi Day <br>"
        holidays += "International Goof Off Day <br>"
        holidays += "National Waffle Day <br>"
        break;
    case 4:
        holidays += "World Health Day <br>"
        holidays += "Earth Day <br>"
        holidays += "Administrative Professionals Day <br>"
        break;
    case 5:
        holidays += "May Day <br>"
        holidays += "Cinco de Mayo <br>"
        holidays += "Star Wars Day <br>"
        holidays += "Memorial Day <br>" 
        break;
    case 6:
        holidays += "Flag Day <br>"
        holidays += "Juneteenth <br>"
        holidays += "World Day of Music <br>" 
        break;
    case 7:
        holidays += "4th of July <br>"
        holidays += "International Joke Day <br>"
        holidays += "National Avocado Day <br>" 
        break;
    case 8:
        holidays += "Spider Man Day <br>"
        holidays += "National Left-Handers Day <br>"
        holidays += "National Fajita Day <br>" 
        break;
    case 9:
        holidays += "Labor Day <br>"
        holidays += "International Literacy Day <br>"
        holidays += "World Suicide Prevention Day <br>" 
        break;
    case 10:
        holidays += "Halloween <br>"
        holidays += "Casimir Pulaski Day <br>"
        holidays += "Columbus Day <br>" 
        break;
    case 11:
        holidays += "Veterans Day <br>"
        holidays += "Thanksgiving <br>"
        holidays += "All Saints Day <br>" 
        break;
     case 12:
        holidays += "Christmas <br>"
        holidays += "Christmas Eve <br>"
        holidays += "New Years Eve <br>" 
        break;
}

}

document.getElementById("holidays").innerHTML = holidays
}