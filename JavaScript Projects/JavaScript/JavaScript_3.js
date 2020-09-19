function showDetails(make) {
    var makemodel = make.getAttribute("data-make-model");
    alert("The " + make.innerHTML + " is " + makemodel + "'s truck.");
}