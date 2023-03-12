// Third Assignment

let formsubmit = document.querySelector(".mainRight form");
let enteredName = document.querySelector(".userName");
let enteredEmail = document.querySelector(".userEmail");
let enteredMessage = document.querySelector(".userMessage");

// Selecting LeftForm Field
let showName = document.querySelector(".enterName");
let showEmail = document.querySelector(".enterMail");
let showMessage = document.querySelector(".enterMessage");

formsubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  showName.value = enteredName.value;
  showEmail.value = enteredEmail.value;
  showMessage.value = enteredMessage.value;
});
