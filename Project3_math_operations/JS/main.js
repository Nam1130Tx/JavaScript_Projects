function sum() {                                                            //Adds the numbers and displays the sum in the "math" element when called.
    var addition = 15 + 17;
    document.getElementById("math").innerHTML = "15 + 17 = " + addition;
}

function diff() {
    var sub = 15 - 17;
    document.getElementById('math2').innerHTML = "15 - 17 = " + sub;        //Subtracts the numbers and dispalys the difference in  the 'math2' element when callled.
}

function product() {                                                        //Multiplies the numbers and displays the  product in the 'math3' element when called.
    var product = 15 * 17;
    document.getElementById('math3').innerHTML = "15 x 17 = " + product;
}

function quotient() {                                                       //Divides the numbers and displays the quotient in the 'math4' element when called.
    var quotient = 15 / 17;
    document.getElementById('math4').innerHTML = '15 / 17 = ' + quotient;
}

function equation() {                                                       // Performs multiple arthmetic operations, and displays the value in the 'math5' element when called.
    var result = (15 + 17) * 5 / (16 - 8);
    document.getElementById('math5').innerHTML = 'The sum of 15 and 17, multiplied by 5, and divided by 16 - 8, equals ' + result;
}

function m_o() {                                                           //Displays the remainder of the numbers divided.
    var remainder = 17 / 15;
    document.getElementById('math6').innerHTML = 'The remainder of 17 divided by 15 is ' + remainder;
}

function negative() {                                                      //Displays the negative of the variable given.
    var x = 3;                          
    document.getElementById('math7').innerHTML = -x;
}

var Y = 20;
Y++;                                                                       //Increases the variable by one-step.
var Z = 100;
Z--;                                                                       //Decreases the variable by one step.

document.write(Y);
document.write(Z);

window.alert(Math.random() * 1000);                                        //Generates a random number in a alert window.

document.write(Math.sqrt(64));                                             //Math object that gives the square root of a given number.