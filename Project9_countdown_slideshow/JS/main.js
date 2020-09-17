// Countdown Assignment
function countdown() {                                       
    var seconds = document.getElementById("seconds").value;             // This line pulls from the html input to create the variable.

    function tick() {                                                   //This function is "ticking down" from the input number. This function is nested.
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {                                                 // This if statement triggers an alert when the count is at -1
        alert("Time's up!");
    }
        }
    tick();
}

// Slideshow Assignment
var slideIndex = 1;                                                     //Variable that set the start of the slideshow
showSlides(slideIndex);

function plusSlides(n) {                                                //The plusSlides function controls the arrows on the slideshow
  showSlides(slideIndex += n);
}

function currentSlide(n) {                                              //Here the  currentSlide function is controling the dots
  showSlides(slideIndex = n);
}

function showSlides(n) {                                                //Function that is controlling the slideshow
  var i;
  var slides = document.getElementsByClassName("slide");                //Pulling the slides from div=slide
  var dots = document.getElementsByClassName("dot");                    //pulling the dots from the div=dot
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";                         //Right here i am not totally  sure what this does, and i have an error, but the code seems to run okay.
  dots[slideIndex-1].className += " active";
}