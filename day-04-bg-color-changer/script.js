const ans = document.getElementById("ans");

function changeColor(color){
    document.body.style.backgroundColor = color;
}

function randomColor(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    ans.textContent = "The random color: rgb(" + red +"," + green + "," + blue + ")";
}
