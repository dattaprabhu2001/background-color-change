const button = document.querySelector("button");
const body = document.querySelector("body");


body.style.backgroundColor = 'aqua';


const color = ['green', 'purple', 'blue', 'yellow', 'violet'];


button.addEventListener('click',chanageC);
function chanageC() {
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
}





