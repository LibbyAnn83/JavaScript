// Dog objects
const dog1 = {
     heading: "Bucket Case",
     image: "images/black-dog.jpg",
     caption: "Just hanging out waiting for water",
     altTag: "Black dog in bucket."
};

const dog2 = {
     heading: "Pensive",
     image: "images/gold-dog.jpg",
     caption: "Contemplating life",
     altTag: "Golden dog laying in grass."
};

const dog3 = {
     heading: "Snow Dog",
     image: "images/snow-dog.jpg",
     caption: "Do you want to build a snowman?",
     altTag: "Winter scene with a dog holding a stick in it's mouth."
};

const dog4 = {
     heading: "Puppy Love",
     image: "images/white-dogs.jpg",
     caption: "Mama kisses are the best",
     altTag: "Two white dogs on the beach."
};

function chooseDog(dog) {
     if (dog == 1) {
     loadMe(dog1, 1)
  }

     else if (dog == 2) {
     loadMe(dog2, 2)
  }
     else if (dog == 3) {
     loadMe(dog3, 3)
  }

    else{
    loadMe(dog4, 4)
    }
}

function loadMe(dog, dogNum) {
     document.getElementById("heading" + dogNum).innerHTML = dog.heading;
     document.getElementById("img" + dogNum).src = dog.image;
     document.getElementById("img" + dogNum).style.display = "block";
     document.getElementById("p" + dogNum).innerHTML = dog.caption;
     document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
     document.getElementById("button" + dogNum).style.display = "none";
}