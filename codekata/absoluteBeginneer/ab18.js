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
  let [principleAmount, interestRate, time]=userInput[0].split(" ").map(parseFloat);
  let simpleInterest= (principleAmount*interestRate*time/100);
  let result = simpleInterest.toFixed(2);
  console.log(result);
});