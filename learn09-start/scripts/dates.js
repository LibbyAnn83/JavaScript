/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const basic = new Date();

document.getElementById("basic").innerHTML = basic



// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const today = new Date("September 19, 2025 10:58:00");

document.getElementById("today").innerHTML = today
// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const birthday = new Date(1983, 1, 22)

document.getElementById("birthday").innerHTML = birthday

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

const iso = basic.toISOString();

document.getElementById("iso").innerHTML = iso

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

const date1 = new Date("Sep 21 2025");
document.getElementById("date1").innerHTML = date1

const date2 = new Date("05/17/2021");
document.getElementById("date2").innerHTML = date2

const date3 = new Date("2019-10-21T07:53:00Z");
document.getElementById("date3").innerHTML = date3


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

const get = new Date();
document.getElementById("get1").innerHTML = get.getFullYear();
document.getElementById("get2").innerHTML = get.getDate();
document.getElementById("get3").innerHTML = get.getTime();
document.getElementById("get4").innerHTML = get.getHours();


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

const set = new Date("February 22 2025");

set.setFullYear(1983)
document.getElementById("set1").innerHTML = set;

set.setMonth(5)
document.getElementById("set2").innerHTML = set;

set.setDate(set.getDate() +365)
document.getElementById("set3").innerHTML = set;

set.setHours(8)
document.getElementById("set4").innerHTML = set;