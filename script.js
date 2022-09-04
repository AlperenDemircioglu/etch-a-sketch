const div = document.createElement("div");
div.setAttribute("class", "container");
const grid = document.createElement("div");
grid.setAttribute("class", "grid");


let divCount = 4;
let gridCount = divCount;

for(i = 0; i < divCount; i++){
    document.body.appendChild(div.cloneNode(true));
}

let divList = document.querySelectorAll(".container");



