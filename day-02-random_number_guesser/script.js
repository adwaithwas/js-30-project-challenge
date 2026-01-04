const prompt = require("prompt-sync")();

let tries = 1;
console.log(`welcome to random number guesser game!! :)`);
let cap = prompt(`enter your range, from 0 to:  `);
let num = Math.floor(Math.random() * cap);
while(true){
    console.log();
    if (tries > 3){
            console.log(`try no.${tries}!!, just give up lol xD`);
        }
    let ans = Number(prompt(`enter a number between 0 and ${cap}:  `));

    if(ans == num){
        console.log(`yay!! you won!!`);
        if (tries == 1){
            console.log(`you got it right in first try!!`);
        } else {
            console.log(`it took you ${tries} tries to get that right!!!`);
        }
        break;
    } else {
        tries++;
        if (ans > num){
            console.log(`go lower`);
        }
        else {
            console.log(`go higher!`);
        }
    }
}