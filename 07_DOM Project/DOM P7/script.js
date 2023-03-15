// Changing input and button state from disabled to enabled
let form = document.querySelector("form");
let input = document.querySelector(".main__form-input");
input.disabled = false;
let button = document.querySelector(".main__form-btn");
console.log(button);
button.disabled = false;

// Removing language with 2.0
let language = document.querySelectorAll(".main__languages a");
languagearr = [...language];
languagearr.forEach((element) => {
  if (element.innerText.includes("2.0")) {
    element.style.display = "none";
  }
});
form.addEventListener('submit', element => element.preventDefault());
button.addEventListener("click", (element) => {
  
  languagearr.forEach((element) => {
    if (element.innerText.includes("2.0")) {
      element.style.display = "inline-block";
    }
  });
});
