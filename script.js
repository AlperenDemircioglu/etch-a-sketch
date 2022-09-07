const div = document.createElement("div");
div.setAttribute("class", "container");
const grid = document.createElement("div");
grid.setAttribute("class", "grid");
const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main");
document.body.appendChild(mainDiv);
const main = document.querySelector(".main");


let divCount = 16;
let gridCount = divCount;

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }


if( divCount == 16){
    for(i = 0; i < divCount; i++){
        main.appendChild(div.cloneNode(true));
    }
    
    let divList = document.querySelectorAll(".container");
    
    for(i = 0; i < gridCount; i++){ 
        divList.forEach((a) => a.appendChild(grid.cloneNode(true)));
    }
    
    const backgroundGrid = document.querySelectorAll(".grid");
    
    backgroundGrid.forEach((a) => a.addEventListener("mouseenter", (e) =>{
        if(e.target.style.background == "") {
            e.target.style.background = setColor();
            console.log("help")
        }
        else{
            let r = e.target.style.background.split("(")[1].split(",")[0];
            let g = e.target.style.background.split("(")[1].split(",")[1];
            let b = e.target.style.background.split("(")[1].split(",")[2].split(")")[0];
            e.target.style.background = `rgb(${r*0,9},${g*0,9}, ${b*0,9})`;
            console.log(r,g,b)
        } 
    })); 

}
const container = document.querySelectorAll(".container");

function popUp(){
    divCount = prompt("Please enter an integer less than 80 for the matrix.");
    if(divCount == null || divCount < 16){
        alert("Matrix size is set to 16x16");
        divCount = 16;
    }
    if(divCount > 80 || divCount == null){
        alert("Matrix size is set to 80x80");
        divCount = 80;
    }

    gridCount = divCount;
    while(main.childElementCount > 0){
        main.childNodes.forEach(a => main.removeChild(a));
    }
    
    for(i = 0; i < divCount; i++){
        main.appendChild(div.cloneNode(true));
    }
    
    let divList = document.querySelectorAll(".container");
    
    for(i = 0; i < gridCount; i++){ 
        divList.forEach((a) => a.appendChild(grid.cloneNode(true)));
    }
    
    const backgroundGrid = document.querySelectorAll(".grid");
  
    
    backgroundGrid.forEach((a) => a.addEventListener("mouseenter", (e) =>{
        e.target.style.background = setColor();
    
    
    }))

}
// How To Generate a Random Color in JavaScript-Chris Coyier 
function setColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#"+randomColor;

}

btn = document.querySelector(".gridSize");
btn.addEventListener("click", popUp);