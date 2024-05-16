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
  const A=parseFloat(userInput[0]);
  const B=parseFloat(userInput[1]);
  const Sum=(A+B).toFixed(1);
  const roundSum=Math.round(Sum);
  console.log(roundSum);
});