var section = document.getElementById("banner");


var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");


var div2 = document.createElement("div");
div1.appendChild(div2);
div2.classList.add("card");

var div3 = document.createElement("div");
div2.appendChild(div3);
div3.classList.add("memberCard")


var image = document.createElement("img");
div3.appendChild(image);
image.src = "images/car.jpeg";


var details = document.createElement("a");
div3.appendChild(details);
details.setAttribute("href", "#");
details.innerHTML = "Details";
details.setAttribute("onclick", "show()");


var toastView = document.createElement("div");
div2.appendChild(toastView);
toastView.classList.add("toast-view");

var icon = document.getElementById("cancel");
toastView.appendChild(icon);
icon.setAttribute("onclick", "hide()")

var heading = document.createElement("h2");
toastView.appendChild(heading);
heading.innerHTML = "Fortuner";

var para1 = document.createElement("p");
toastView.appendChild(para1);
para1.classList.add("para1");
para1.innerHTML = "Brand : Toyoto";

var para2 = document.createElement("p");
toastView.appendChild(para2);
para2.classList.add("para2");
para2.innerHTML = "Mileage : 10km/l";

var para3 = document.createElement("p");
toastView.appendChild(para3);
para3.classList.add("para3");
para3.innerHTML = "Color : Black";

var para4 = document.createElement("p");
toastView.appendChild(para4);
para4.classList.add("para4");
para4.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit";

function show() {
    div3.nextElementSibling.classList.add("clip");
}
function hide() {
    icon.parentNode.classList.remove("clip");
}
