const prompt = require("prompt-sync")();

let num1 = Number(prompt("enter your first number:  ").trim());
let op = prompt("enter your operator:   ").trim();
let num2 = Number(prompt("enter your second number: ").trim());

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("please enter real numbers!!");
    process.exit(1);
}

switch(op){
    case "+":
        console.log(`your answer is:    ${num1+num2}`);
        break;
    case "-":
        console.log(`your answer is:    ${num1-num2}`);
        break;
    case "*":
        console.log(`your answer is:    ${num1*num2}`);
        break;
    case "/":
        if (num2 == 0){
            console.log("can't divide with zero");
            break;
        }
        console.log(`your answer is:    ${num1/num2}`);
        break;
    case "%":
        if (num2 == 0){
            console.log("can't modulo with zero");
            break;
        }
        console.log(`your answer is:    ${num1%num2}`); 
        break;
    default:
        console.log("please enter valid values");
        
}