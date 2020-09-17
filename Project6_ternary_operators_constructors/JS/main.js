function Ride_Function() {                                                  //This is a ternary operation that uses input from the web page to return a result.
  var Height, Can_ride;
  Height = document.getElementById('Height').Value;
  Can_ride = (Height < 52) ? 'You are too short':'You are tall enough';
  document.getElementById('Ride').innerHTML = Can_ride + ' to ride.';
}


function Vehicle(Make, Model, Year, Color) {                               //Constructor function that builds new objects using parameters.
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Travel(Length, Safety, Comfort) {                                 //Another Constructor function using the new keyword
    this.Travel_Length = Length;
    this.Travel_Safety = Safety;
    this.Travel_Comfort = Comfort;
}
var Plane = new Travel("Fastest", "Safe", "Uncomfortable");
var Train = new Travel("Slower", "Safer", "Comfortable");
var RV = new Travel("Slowest", "Safest", "Very Comfortable");
function TravelFunction() {
    document.getElementById('New_and_This').innerHTML = "Planes are the " + Plane.Travel_Length + " form of travel. RV's are the "
    + RV.Travel_Safety + ('. And trains are nice and ') + Train.Travel_Comfort + (".");
}

function Subtract1() {                                                    //Nested function, a outer function that calls the result of an inner function to complete.
    document.getElementById("Nested_Function").innerHTML = diff();
    function diff() {
        var base_number = 7;
        function minus_two() {base_number -= 2;}
        minus_two();
        return base_number  
    }
}