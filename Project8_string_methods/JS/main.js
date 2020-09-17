function concshell() {
    var sec1 = "Big dogs are ";
    var sec2 = "better than little dogs, ";
    var sec3 = "but medium sized dogs ";
    var sec4 = "are the perfect size for ";
    var sec5 = "home and outdoors.";
    var all_together = sec1.concat(sec2, sec3, sec4, sec5);
    document.getElementById('dogs').innerHTML = all_together;
}

function slice_demo() {
    var sentence = "A slice of pie is nice.";
    var section = sentence.slice(11,23);
    document.getElementById('section').innerHTML = section;
}

function magic_string() {
    var m = 999;
    document.getElementById("birds_to_fish").innerHTML = m.toString();
}

function prescion() {
    var p = 3.14159265359;
    document.getElementById("Pi").innerHTML = p.toPrecision(4);
}