function sport_function() {
    var text
    var sports = document.getElementById("sport").value;

    switch (sports) {
        case "Soccer":
            text = "Popular world wide!";
        break;
        case "Football":
            text = "Brutal, but fun!";
        break;
        case "Baseball":
            text = "Nothing like a cold one and a game!";
        break;
        case "Basketball":
            text = "Very fast paced!";
        break;
        default:
        text = "Thats not a real sport! Pick again.";
    }
    document.getElementById("result").innerHTML = text
}

function class_function() {
    var c = document.getElementsByClassName("old");
    c[0].innerHTML = "Hello, I'm new here.";
}

function line_function() {
    var b = document.getElementById("mango");
    var ctx = b.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(250,125);
    ctx.stroke();
}

function circle_function() {
    var m = document.getElementById("mango");
    var ctx = m.getContext("2d");
    ctx.beginPath();
    ctx.arc(125,60,40,0,2 * Math.PI);
    ctx.stroke();
}

function gradient_function() {
    var g = document.getElementById("mango");
    var ctx = g.getContext("2d");
    var m_gradient = ctx.createLinearGradient(0,0,0, 170);
    m_gradient.addColorStop(0, "black");
    m_gradient.addColorStop(0.5, "olive");
    m_gradient.addColorStop(1, "white");
    ctx.fillStyle = m_gradient;
    ctx.fillRect(0,0,250,125);
}