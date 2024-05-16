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
   const inputValues = userInput[0].split(" ").map(Number);
   const A = inputValues[0];
   const N = inputValues[1];
   for (let i=0; i< N; i++) {
    console.log(A);
   }
});