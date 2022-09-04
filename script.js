const div = document.createElement("div");
div.setAttribute("class", "container");
const grid = document.createElement("div");
grid.setAttribute("class", "grid");
const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main");


let divCount = 16;
let gridCount = divCount;

for(i = 0; i < divCount; i++){
    document.body.appendChild(div.cloneNode(true));
}

let divList = document.querySelectorAll(".container");

for(i = 0; i < gridCount; i++){ 
    divList.forEach((a) => a.appendChild(grid.cloneNode(true)));
}

const backgroundGrid = document.querySelectorAll(".grid");

backgroundGrid.forEach((a) => a.addEventListener("mouseenter", (e) =>{
    e.target.style.background = "black";


}))