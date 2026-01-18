const equation = document.getElementById("equation");
const btn = document.getElementById("calculate");
const sol = document.createElement("p");

btn.addEventListener("click", (e) => {
    let expression = equation.value;
    try{
        sol.textContent = `the answer is:   ${eval(expression)}`;
    }
    catch (error){
        if(error.name == "ReferenceError" || error instanceof SyntaxError){
            sol.textContent = `please enter valid expression`;
        } else {
            sol.textContent = error.message;
        }
    }
    
    document.body.appendChild(sol);
})

equation.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        btn.click();
    }
})