
var d = 9
function sq() {
    document.write(d * d + "<br>");
}
sq();

function sq2() {
    var m = 98;
    document.write(m * m + "<br>");
}
sq2();

var y = 1
function sum() {
    var p = 59;
    document.write(y + p + "<br>");
}
function diff() {
    var u = 100;
    document.write(p - y + "<br>");
    console.log(p - y);
}
sum();
diff();

function timefunction() {
    if (new Date().getHours() > 7) {
    document.getElementById("today").innerHTML = "Time to get up!";
    }
}

function zebra() {
    if (5 < 7) {
        document.write("Ground control, to Major Tom...");
    } 
}

function random() {
    x = document.getElementById("number").value;
    if (x < 10) {
        reply = "Good Job";
    } 
    else {
        reply = "Please pay attention.";
    }
    document.getElementById("num1").innerHTML = reply;
}

function get_time() {
    var time = new Date().getHours();
    var  result;
    if (time < 12 == time > 0) {
        result = "Its still morning...ugh. -.-";
    }
    else if (time > 12 == time < 18) {
        result = "Post lunch sleepiness.";
    }
    else {
        result = "Time to relax!";
    }
    document.getElementById("cycle").innerHTML = result;
}