// Making sidebar Scrollable
let sidebar = document.querySelector('.col-lg-4');
sidebar.style.overflowY = 'scroll';

// Making background invisible
let body = document.body.style.backgroundImage = 'none'

// Creating hamburger menu
let button = document.querySelector('.navbar-toggler-icon');

let menu = document.querySelector('#navbarTogglerDemo01');
 button.addEventListener('click' , (click) => {
 if (menu.style.display = "none")
 {
    menu.style.display = 'block';
 }
 else{
    menu.style.display = 'none'
 }
})