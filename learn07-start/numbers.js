function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Elizabeth Nelson"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */

    let x = 47;
    let y = "12";
    let z = x + y;

    let addString = "When you add " + x + " and " + y + " you get " + z;

    document.getElementById("add").innerHTML = addString

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph

    let q = 3894;
    let string=  "The toString() method converts a number " + q + " to a string " + q.toString();

    document.getElementById("to-string").innerHTML = string

    // Demonstrate the use of toExponential() and print to the exponent paragraph

    let w = 5298.902832
    let exponent = "The toExponential() method takes a number " + w + " and returns a string in exponential form " + w.toExponential(3)

    document.getElementById("exponent").innerHTML = exponent

    // Demonstrate the use of toFixed() and print to the fixed paragraph

    fixed = "The toFixed() method takes a number " + w + " and returns a string rounded to a specific number of decimals " + w.toFixed(2)
    document.getElementById("fixed").innerHTML = fixed

    // Demonstrate the use of toPrecision() and print to the precision paragraph


    precision = "The toPrecision() method takes a number " + w + " and returns the specified number of significant digits " + w.toPrecision(4)
    document.getElementById("precision").innerHTML = precision

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let v = "27.5 days at sea 12"    
    float = "The parseFloat() method takes a string '" + v + "' and parses out the first number " + parseFloat(v)

    document.getElementById("float").innerHTML = float

    // Demonstrate the use of parseInt() and print to the int paragraph

    int = "The parseInt() method takes a string '" + w + "' and parses out the first whole number " + parseInt(w)
    document.getElementById("int").innerHTML = int

    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    let b=2
    let c="2"
    let d = b==c
    let e = b===c

    equals = " == is a comparison that checks for equality so that " + b + " == " + c + " = " + d + " even though one is a string and one is a number, while === is a strict equality so that " + b + " === " + c + " = " + e + " because they are not strictly the same -- one is a number and one is a string"

    document.getElementById("equals").innerHTML = equals

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    logic = "The order of operations for AND and OR in Javascript is that AND is always processed first. That means that you may need to use parentheses in order to keep your operations as intended"
    document.getElementById("logic").innerHTML = logic

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph


    var expression = window.prompt("What is your favorite color?");
    var results = ""
    switch(expression) {
        case "pink":
            message = "The is the only correct answer. You rock!";
            break;
        case "red":
            message = "oooooh...so close";
            break;
        default:
            message = "Bold choice.";
            break;
    
    }

    switchCode = "Using switch is an alternative to complicated if/else statements. This code prints the response below based on the color inputted. <br><br>"  +  message
    document.getElementById("switch").innerHTML = switchCode

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

    var color= expression
    color === "red"
    ? ternary = "You have excellent taste."
    : ternary = "Why don't you like red???"

    document.getElementById("ternary").innerHTML = "The ternary operator is an even more efficient if statement. The results of the code are shown below. <br><br>" + ternary
}