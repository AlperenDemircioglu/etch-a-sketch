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
            let r = parseInt(e.target.style.background.split("(")[1].split(",")[0])*0.8;
            let g = parseInt(e.target.style.background.split("(")[1].split(",")[1])*0.8;
            let b = parseInt(e.target.style.background.split("(")[1].split(",")[2].split(")")[0])*0.8;
            e.target.style.background = `rgb(${r},${g}, ${b})`;
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
        if(e.target.style.background == "") {
            e.target.style.background = setColor();
            console.log("help")
        }
        else{
            let r = parseInt(e.target.style.background.split("(")[1].split(",")[0])*0.8;
            let g = parseInt(e.target.style.background.split("(")[1].split(",")[1])*0.8;
            let b = parseInt(e.target.style.background.split("(")[1].split(",")[2].split(")")[0])*0.8;
            e.target.style.background = `rgb(${r},${g}, ${b})`;
            console.log(r,g,b)
        } 
    
    
    }))

}
// How To Generate a Random Color in JavaScript-Chris Coyier 
function setColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#"+randomColor;

}

btn = document.querySelector(".gridSize");
btn.addEventListener("click", popUp);