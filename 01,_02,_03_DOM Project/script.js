// Assignment First.

// Adding navigation links

let lni = document.createElement("li");

lni.innerText = "Hire me";
let ln = document.getElementById("link");
console.log(lni);
ln.appendChild(lni);

// Changing placeholder
let search = document.querySelector(".search-field > input");
search.placeholder = "Search my Project";

// Changing span text

let lefthero = document.querySelectorAll("span");
console.log(lefthero[3]);
let newspan = (lefthero[3].innerText = "iNeuron Intelligence Pvt Ltd");

// image swap

let image = document.querySelector("img");

image.src = "./HiteshChaudharyPict.png";

// Add extra button

let button = document.createElement("button");
button.className = "btn";
button.id = "button";
button.innerText = "Support Me";
let btn = document.getElementsByClassName("hero-right-section-btns");
btn[0].appendChild(button);
console.log(btn[0]);



