// document.getElementById('count-el').innerText = 5;

let countEl = document.getElementById('count-el');

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrement(){
    count -= 1;
    countEl.innerText = count;
}

function save() {
    console.log(count);
}

let greet = document.getElementById('greet');

let nam = "my first site";
let greeting = "Welcome to";

greet.innerHTML = greeting + " " +  nam;
greet.innerHTML += "&#128512";

let saveEl = document.getElementById('save-el');

function save() {
    saveStr = count + " - ";
    saveEl.textContent += saveStr;
    countEl.innerText = 0;
    count = 0;
       
}












