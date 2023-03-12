let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// Assignment Second.

// Changing backgroung Color
let heading = document.querySelectorAll(".accordian h3");
// heading.firstChild.innerHtml;
heading.forEach(element => {
  element.style.backgroundColor = "#dadaf8"
});

// Changing Hobbies Text

let paragraph = document.querySelectorAll(".accordian p");
paragraph[3].innerText = "I posses very good command over Full Stack technologies like MERN which can be seen in my work over Github.";


 let li= document.querySelectorAll('ul>li');
 console.log(li[2]);
 li[2].innerText="Project";
