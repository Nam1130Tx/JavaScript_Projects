document.write(typeof "Word");                                          //Typeof is used to display the type of data(string,number)
document.write("<br><br>");
document.write(typeof 7);
document.write('<br><br>');

function positive() {                                                   //Using a function to get infinty to display 
    var pos = (7E610);
    document.getElementById('infinity').innerHTML = pos;
}

function negative() {                                                   //Using a function to get a -infinty to display 
    var neg = (-5E450);
    document.getElementById('neginfinity').innerHTML = neg;
}

document.write(77 > 67);                                                //Evaluates the statement and displays True
document.write("<br><br>");
document.write(5 < 3);                                                  //Evaluates the expression and displays False
document.write("<br><br>");

console.log(7+9);                                                       //Writes the sum 16, in the console log

document.write("Apple" + 5);                                            //Uses typeCoersion to add two data types
document.write("<br><br>");

document.write((3 * 5)==15);                                            //Uses "==" to see if the items are equal, and displays true if they  are.
document.write("<br><br>");
document.write((18 / 3)==("tree"));                                     //Uses "==" to see if the items are equal, and displays false if they are not. Since the data types are differnt in the comparison, the result is False. 
document.write("<br><br>");

var boxesofcookies1 = 25, boxesofcookies2 = 25;                         //Compares the data type&value, displays true since all are equal
document.write(boxesofcookies1===boxesofcookies2);
document.write("<br><br>");

var x = 7, tree = "oak";                                                //Compares the data type&value,since both are differnt displays false.
document.write(x===tree);
document.write("<br><br>");

var a = 5, b = '7';                                                     //Compares the data type&value,since the data types are differnt false is displayed.
document.write(a===b);
document.write("<br><br>");

var ball1 = "Football", ball2 = "Baseball";                             //Compares the data type&value,since the values are different, false is displayed.
document.write(ball1===ball2);
document.write("<br><br>");

document.write((5 + 2) < 9 && 7==7);                                    //Uses AND to compare the statements and displays true if both statement are true.   
document.write("<br><br>");
var g = 8, h = 4;
document.write(g > h && (g-h) > h );                                    //Uses AND to compare the statements and display false if EITHER statement is false.
document.write("<br><br>");

document.write(7 > 5 || 5 > 7);                                         //Uses OR to compare the statements and returns True since one statement  is true.
document.write("<br><br>");

document.write("two" > 5 || 7 > 9);                                     //Uses OR to compare the statements and returns False since both statements are false.
document.write("<br><br>");

function notfun() {                                                     //Uses NOT to display false, since the statement  is true.
    document.getElementById('not').innerHTML = !(2 < 3);
}

function notfun2() {                                                    //Uses NOT to display true, since the statement is false.
    document.getElementById("not2").innerHTML = !(8 < 3);
}



