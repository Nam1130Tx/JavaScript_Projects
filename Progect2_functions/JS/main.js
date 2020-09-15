function changefont(newcolor) {  //This function changes the color of the text for the first two buttons.
    var elem = "Lets try this."; //This is the element being targeted.
    elem = elem.fontcolor(newcolor); //This gives the text a new color.
    document.getElementById('result1').innerHTML=elem; // this displays the result of the function.
}

function funk() {                                           //Function that changes the text of an element.
    var sentance = "Now give me";                           //New text string to be displayed
    sentance += " a brownie, please.";                      //"+=" used to concentrate this second string with the first.
    document.getElementById("conc").innerHTML = sentance;   //Displays the  result of the function.
}