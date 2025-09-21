function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

    const math = 3.14159265

    document.getElementById("round").innerHTML = Math.round(math);
    document.getElementById("ceil").innerHTML = Math.ceil(math);
    document.getElementById("floor").innerHTML = Math.floor(math);
    document.getElementById("trunc").innerHTML = Math.trunc(math);
    document.getElementById("sign").innerHTML = Math.sign(math);
    document.getElementById("pow").innerHTML = Math.pow(math, 3);
    document.getElementById("min").innerHTML = Math.min(math, -3.14, 12, 2.222222);
    document.getElementById("random").innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 101);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

    let x=2
    

    document.getElementById("comparisons").innerHTML = "== means equal value so two numbers that are the same will return 'true' while === means that they are both equal value and also the same type. If x=2 then x=='2' is " + (x=="2") + " and x=2 is " + (x==2) + " but x==='2' is " + (x==='2') + " even thought x===2 is " + (x===2)



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page

    
}