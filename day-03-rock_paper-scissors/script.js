let prompt = require("prompt-sync")();

let tries = 0;
let cwin = 0;
let pwin = 0;

while (tries < 3) {
    console.log("#_______________________________________________________________#")
    let choices = ["rock", "paper", "scissors"];
    let idx = Math.round(Math.random() * 2);
    // console.log(`comp choose ${choices[idx]}`);

    console.log("what do you choose?");
    let ans = prompt();

    if (ans == choices[idx]) {
        console.log("draw!!");
        continue;
        console.log("#_______________________________________________________________#") //just for debug, i never cheat :)
    }

    if (
        (ans == "rock" && choices[idx] == "scissors") ||
        (ans == "paper" && choices[idx] == "rock") ||
        (ans == "scissors" && choices[idx] == "paper")
    ) {
        console.log(`comp choose ${choices[idx]}`);
        console.log("you won!!");
        pwin++;
        tries++;
        console.log("#_______________________________________________________________#")
    } else {
        console.log(`comp choose ${choices[idx]}`);
        console.log("you lost!!");
        cwin++;
        tries++;
        console.log("#_______________________________________________________________#")
    }
}

console.log("#_______________________________________________________________#")
if (cwin > pwin) {
    console.log(`computer wins the game!!`);
} else {
    console.log(`you win the game!!`);
}
console.log("#_______________________________________________________________#")
