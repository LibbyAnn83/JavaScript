function addDate(){
    let today = new Date();
    var rooms = "1"
    
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}

function changeRooms(num){
    document.getElementById("room1").style.display = "block";


    if (num == "2"){
        document.getElementById("room2").style.display = "block";
    }
    else{
        document.getElementById("room2").style.display = "none";
    }

    if (num == "3"){
        document.getElementById("room3").style.display = "block"
        document.getElementById("room2").style.display = "block";
    }
    else{
        document.getElementById("room3").style.display = "none";
    }
}


function estimate() {
    let name = document.getElementById("name").value;
    let num = parseInt(document.getElementById("rooms").value);
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = ((length * height * 2) + (length *width * 2));
    let cost = (totalSqFt * .65);
    document.getElementById("rm1cost").value = cost;

    let cost2=0;
    let length2 = parseFloat(document.getElementById("rm2length").value);
    let width2 = parseFloat(document.getElementById("rm2width").value);
    let height2 = parseFloat(document.getElementById("rm2height").value);
    let totalSqFt2 = ((length2 * height2 * 2) + (length2 *width2 * 2));
    cost2 = (totalSqFt2 * .65);
    document.getElementById("rm2cost").value = cost2;

    let cost3=0;    
    let length3 = parseFloat(document.getElementById("rm3length").value);
    let width3 = parseFloat(document.getElementById("rm3width").value);
    let height3 = parseFloat(document.getElementById("rm3height").value);
    let totalSqFt3 = ((length3 * height3 * 2) + (length3 *width3 * 2));
    cost3 = (totalSqFt3 * .65);
    document.getElementById("rm3cost").value = cost3;

    var totalCost = cost+cost2+cost3;

    document.getElementById("estimate").innerHTML = (name + ", your estimate is $" + totalCost);
}