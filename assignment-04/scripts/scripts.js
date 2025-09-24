let answer = Math.ceil(Math.random() * 1000);
const array=[];
const colors=["#FF0000", "#FF4500", "#FF6347", "#FF8C00", "#f8fc2cff", "#87CEEB", "#1E90FF", "#0000CD", "#191970"];

function setup(){
  
  alert(answer);
document.getElementById("result").innerHTML = "?";
}

document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userGuess = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; 

    array.push(userGuess)
  let difference = Math.abs(answer-userGuess)


if (difference === 0) {
  result = "You got it! You're on Fire!"
  resultIndex = 0
}
else if (difference < 5) {
 result = "Burning Up";
 resultIndex = 1
}
else if (difference < 10) {
  result = "Very Hot";
  resultIndex = 2
} 
else if (difference < 50) {
  result = "Hot";
  resultIndex = 3
} 
else if (difference < 100) {
  result = "Warm";
  resultIndex = 4
} 
else if (difference < 200) {
  result = "Cool";
  resultIndex = 5
}
else if (difference < 300) {
  result = "Cold";
  resultIndex = 6
} 
else if (difference < 400) {
  result = "Really Cold";
  resultIndex = 7
}
else {
  result = "Ice Cold"
  resultIndex = 8
}
document.getElementById("result").innerHTML = result
document.getElementById("result").style.color = colors[resultIndex];
document.getElementById("guessed").innerHTML = array.join(", ")    
});