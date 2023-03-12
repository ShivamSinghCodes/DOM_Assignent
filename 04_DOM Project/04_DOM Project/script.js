// Assignment 4

// Changind stats background
let barbarianbcg = document.querySelector(".clash-card__unit-stats--barbarian");
barbarianbcg.style.backgroundColor = "#ec9b3b" ;
let archerbcg = document.querySelector(".clash-card__unit-stats--archer")
archerbcg.style.backgroundColor = "#ee5487" ;
let giantbcg = document.querySelector(".clash-card__unit-stats--giant");
giantbcg.style.backgroundColor = "#f6901a";
let goblinbcg = document.querySelector(".clash-card__unit-stats--goblin");
goblinbcg.style.backgroundColor = "#82bb30";
let wizardbcg = document.querySelector(".clash-card__unit-stats--wizard");
wizardbcg.style.backgroundColor = "#4facff";

// Text color
let text = document.querySelectorAll(".one-third");
var textarray = [...text];
textarray.forEach(color => color.style.color = "#ffffff");
