function Call_Loop() {                                 //Function that uses a loop
    let h = 0;
    let j = 0;
    while (h < 10) {                                   //While statement that increases h by 1, then adds that to J.
       h++;                                            //when h equals 10 the loop terminates.
       j += h; 
    }
    document.getElementById('Loop').innerHTML = "h "   //Displays this string when done.
    + "= " + h + "<br>" + "All done!";
}

function for_loop() {                                                           //
    var instruments = ["Flute", "Hammer", "Spatula", "Scaple", "Paintbrush"];   
    var content = "";
    for (let t = 0; t < instruments.length; t++) {                              //Using let to define a variable.
        content += instruments[t] + "<br>"   
    }
    document.getElementById("List_Of_Instruments").innerHTML = content;
}

function array_function() {                                                     //Displays an array
    let veggies = ["Broccoli", " Radishes", " Carrots", " Eggplant", " Squash"];
    document.getElementById('Array').innerHTML = veggies;
}

const dog = {Name:"Oliver", Breed:"beagle", Gender:"male", Color:"brown & white"};  //Using a constant, the value can be changed but the type and name cannot.
function constant_function() {
    dog.Breed = "terrier";
    dog.activity = "lazy";
    document.getElementById("Constant").innerHTML = "My dogs name is " + dog.Name +
    ", he is a " + dog.Breed + " and 2 years old. He is a " + dog.Gender + ", with " +
    dog.Color + " coloring. He is very " + dog.activity + ".";
}
var k = 33
function let_function() {
    let g = 77;                                                                      //This let can only be used in this bracket because it is a block scope.
    var sum = (k + g);                                                               //Also, I had to use .getElementbyid because the script is defered.
    document.getElementById("letter").innerHTML = sum;
}

let book = {                                                                         //Using let keyword to define an obect, with properties and a method. info is the method.
    Title: "Carbal ",
    Author: "S. Garber ",
    Year: "2017 ",
    Genre: "fantasy/adventure",
    Info : function() {
        return "This novel is a " + this.Genre + ", called " + this.Title + ". It was written in "
         + this.Year + ", by " + this.Author + ".";
    }
};
document.getElementById("Good_Read").innerHTML = book.Info();