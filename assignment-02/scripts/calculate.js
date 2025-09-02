//https://www.w3schools.com/jsref/jsref_tofixed.asp for 2 decimals
//https://www.w3schools.com/tags/att_input_type_number.asp to define fields for entering numbers

function order(){

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let italian = document.getElementById("italian").value;
    let meatball = document.getElementById("meatball").value;
    let grilled = document.getElementById("grilled").value;
    let veggie = document.getElementById("veggie").value;
    let burger = document.getElementById("burger").value;
    let sandwichSubTotal = (italian * 9.99) + (meatball * 10.99) + (grilled * 3.99) + (veggie * 6.99) + (burger * 10.95);
    
    let chips = document.getElementById("chips").value;
    let fries = document.getElementById("fries").value;
    let salad = document.getElementById("salad").value;
    let mashed = document.getElementById("mashed").value;
    let fruit = document.getElementById("fruit").value;
    let sidesSubTotal = (chips * 1.55) + (fries * 2.55) + (salad * 4.55) + (mashed * 3.55) + (fruit * 3.55);


    let coke = document.getElementById("coke").value;
    let cherry = document.getElementById("cherry").value;
    let sprite = document.getElementById("sprite").value;
    let water = document.getElementById("water").value;
    let lemonade = document.getElementById("lemonade").value;
    let drinksSubTotal = (coke * 2.95) + (cherry * 2.95) + (sprite * 2.95) + (water * 3.55) + (lemonade * 4.55);




    let totalCost = sandwichSubTotal + sidesSubTotal + drinksSubTotal;

    document.getElementById("order").innerHTML = (name + ", your order will be ready for pickup at " + time + " on " + date + ".<br> Your total is $" + totalCost.toFixed(2) + ". The subtotal for sandwiches is $" + sandwichSubTotal.toFixed(2) + ", the subtotal for sides is $" + sidesSubTotal.toFixed(2) + ", and the subtotal for drinks is $" + drinksSubTotal.toFixed(2) + ".<br> Have a great day!");
}