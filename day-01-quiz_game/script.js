const prompt = require("prompt-sync")();

console.log("quiz game meow");

let total = 5;
let correct = 0;

let ques1 = "What is the capital of India?";
let ans1 = "new delhi";

let ques2 = "What is the capital of Japan?";
let ans2 = "tokyo";

let ques3 = "What is the capital of France?";
let ans3 = "paris";

let ques4 = "Which planet is known as the Red Planet?";
let ans4 = "mars";

let ques5 = "Which ocean is the largest in the world?";
let ans5 = "pacific ocean";


ask(ques1, ans1);
ask(ques2, ans2);
ask(ques3, ans3);
ask(ques4, ans4);
ask(ques5, ans5);

function ask(ques, ans){
    console.log(ques);
    let sol = prompt();
    test(ans, sol);
}

function test(ans, sol) {
    if (sol.toLowerCase() == ans) {
        console.log("Correct");
        correct++;
    } else {
        console.log("Nah");
    }
}

// Evaluation

let percent = Math.floor((correct / total) * 100);

console.log(`you scored ${correct}/${total}!!`);
console.log(`that's a ${percent}% score my homie!!`);
