function getReceipt() {                                         //This function is getting the price for size of the pizza selected.
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {                   //If statement to set a price for each size.
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;                                  //Totals the cost the displays the  price
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {                      //This function keeps track of the toppings as the are selected, and then displays the toppings when called down below.
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); //Adding the costs of toppings to the running total after  1-free topping.
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;        // This shows the toppings selected from above.
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";                    //This shows the price of items selected.
};