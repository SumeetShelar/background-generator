var c1 = document.getElementById("color1");
var c2 = document.getElementById("color2");
var css = document.querySelector("h3");
var body = document.querySelector("body");

function gradient() {
    body.style.background = "linear-gradient(to right ," 
    + c1.value 
    + "," 
    + c2.value 
    + ")" ;

    css.textContent = "background: " + body.style.background + ";" ;
}

c1.addEventListener("input", gradient);
c2.addEventListener("input", gradient);

