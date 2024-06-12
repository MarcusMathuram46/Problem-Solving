// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let N=parseInt(userInput[0]);
    for(let i=1; i<=N; i++){
        if (i%2===0){
            console.log(i);
        }
    }
});