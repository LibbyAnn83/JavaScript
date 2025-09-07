const recipe1 = {
    recipeName: "BBQ Tofu Tacos",
    image: "images/bbq-tacos.jpg",
    altText: "BBQ Tofu Tacos on a plate",
    ingredients: "avocado oil, red onion, smoked paprika, garlic powder, onion powder, pepper, firm tofu, bbq sauce, avocados, corn, cilantro, lime juice, cumin, corn tortillas",
    allergens: "Soy",
    cuisineType: "Vegan, Mexican-inspired",
    url: "https://www.thissavoryvegan.com/bbq-tofu-tacos/",
    source: "This Savory Vegan",
}

const recipe2 ={
    recipeName: "Breakfast Tomatoes",
    image: "images/tomatoes.jpg",
    altText: "red slicing tomatoes",
    ingredients: "tomatoes, chickpea flour, nutritional yeast, black salt, onion powder, garlic powder, smoked paprika, turmeric, black pepper, water, chives",
    allergens: "None",
    cuisineType: "Vegan, Breakfast",
    url: "https://elavegan.com/breakfast-tomatoes",
    source: "Ela Vegan",
}

const recipe3 ={
    recipeName: "Smoky Cajun Veggies & Smashed White Beans",
    image: "images/veggies.jpg",
    altText: "roasted vegetables in white baking dish",
    ingredients: "15 ounce can white beans, red bell pepper, green bell pepper, red onion, sliced zucchini, 3 to 4 ounces mushrooms, corn, 3 cloves garlic, oil, lime juice, Cajun seasoning, paprika, thyme, salt, chipotle peppers in adobo sauce, non-dairy yogurt, maple syrup, garlic powder, nutritional yeast, salt",
    allergens: "None",
    cuisineType: "Vegan, Cajun",
    url: "https://www.veganricha.com/cajun-veggies-smashed-white-beans/",
    source: "Vegan Richa",
}

const recipe4 ={
    recipeName: "Buffalo Cauliflower Sandwiches",
    image: "images/cauliflower.jpg",
    altText: "sliced cauliflower on a sheet pan",
    ingredients: "1 head cauliflower, buffalo sauce, garlic powder, chili powder, olive oil, flax meal, water, flour, sparkling water, ciabatta rolls",
    allergens: "None",
    cuisineType: "Vegan, Sandwich",
    url: "https://www.thissavoryvegan.com/ultimate-vegan-buffalo-cauliflower-sandwich",
    source: "This Savory Vegan",
}

const recipe5 ={
    recipeName: "Mediterranean Sheet Pan Gnocchi with Tomatoes, Basil, and Balsamic",
    image: "images/gnocchi.jpg",
    altText: "gnocchi in a pan",
    ingredients: "potato gnocchi, lentils, red bell pepper, green bell pepper, grape tomatoes, onion, chopped mixed vegetables, olive oil, balsamic vinegar, lemon juice, garlic powder, salt, dried basil, dried oregano, red pepper flakes, kalamata olives, vegan cheese, fresh basil",
    allergens: "None",
    cuisineType: "Vegan, Mediterranean",
    url: "https://www.veganricha.com/mediterranean-sheet-pan-gnocchi/",
    source: "Vegan Richa",
}

function display() {
    let html = `<h2>${recipe1.recipeName}</h2>` + 
        `<img src =${recipe1.image} alt= ${recipe1.altText}>` + `<h3>Key Ingredients:</h3>` + `<p>${recipe1.ingredients} </p>`
        + `<h3>Type of Cuisine:</h3>` + `<p>${recipe1.cuisineType}</p>` + `<h3>Allergens:</h3>` + `<p>${recipe1.allergens} </p>`
        + `<h3>Source and Full Recipe:</h3>` + `<a href = ${recipe1.url} target="_blank">${recipe1.source}</a>`
    
    document.getElementById("object1").innerHTML = html;

     let html2 = `<h2>${recipe2.recipeName}</h2>` + 
        `<img src =${recipe2.image} alt= ${recipe2.altText}>` + `<h3>Key Ingredients:</h3>` + `<p>${recipe2.ingredients} </p>`
        + `<h3>Type of Cuisine:</h3>` + `<p>${recipe2.cuisineType}</p>` + `<h3>Allergens:</h3>` + `<p>${recipe2.allergens} </p>`
        + `<h3>Source and Full Recipe:</h3>` + `<a href = ${recipe2.url} target="_blank">${recipe2.source}</a>`
    
    document.getElementById("object2").innerHTML = html2;

     let html3 = `<h2>${recipe3.recipeName}</h2>` + 
        `<img src =${recipe3.image} alt= ${recipe3.altText}>` + `<h3>Key Ingredients:</h3>` + `<p>${recipe3.ingredients} </p>`
        + `<h3>Type of Cuisine:</h3>` + `<p>${recipe3.cuisineType}</p>` + `<h3>Allergens:</h3>` + `<p>${recipe3.allergens} </p>`
        + `<h3>Source and Full Recipe:</h3>` + `<a href = ${recipe3.url} target="_blank">${recipe3.source}</a>`
    
    document.getElementById("object3").innerHTML = html3;

     let html4 = `<h2>${recipe4.recipeName}</h2>` + 
        `<img src =${recipe4.image} alt= ${recipe4.altText}>` + `<h3>Key Ingredients:</h3>` + `<p>${recipe4.ingredients} </p>`
        + `<h3>Type of Cuisine:</h3>` + `<p>${recipe4.cuisineType}</p>` + `<h3>Allergens:</h3>` + `<p>${recipe4.allergens} </p>`
        + `<h3>Source and Full Recipe:</h3>` + `<a href = ${recipe4.url} target="_blank">${recipe4.source}</a>`
    
    document.getElementById("object4").innerHTML = html4;

     let html5 = `<h2>${recipe5.recipeName}</h2>` + 
        `<img src =${recipe5.image} alt= ${recipe5.altText}>` + `<h3>Key Ingredients:</h3>` + `<p>${recipe5.ingredients} </p>`
        + `<h3>Type of Cuisine:</h3>` + `<p>${recipe5.cuisineType}</p>` + `<h3>Allergens:</h3>` + `<p>${recipe5.allergens} </p>`
        + `<h3>Source and Full Recipe:</h3>` + `<a href = ${recipe5.url} target="_blank">${recipe5.source}</a>`
    
    document.getElementById("object5").innerHTML = html5;

}