// Adding chinese
let menu = document.querySelector('.tags-container div');
console.log(menu[1]);
let chinese  = document.createElement('a');
chinese.innerText = 'Chinese (7)'; 
chinese.href = '#';
menu.append(chinese);

// Adding Button
let button = document.querySelectorAll('div');
let btn = document.createElement('button');
btn.href="index.html";
btn.innerText = 'Pro Subscription';
button[3].appendChild(btn);
btn.className= 'btn';
btn.style.border ='0';

// Adding 6th card
let div  = document.createElement('div');
div.className= 'card';
let text = document.createElement('h5');
text.className= 'recipe-name';
text.innerText = 'add 6th card here';
div.append(text);
console.log(div);
let card = document.querySelector('.recipe-gallery');
card.appendChild(div);