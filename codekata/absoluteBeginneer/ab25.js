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
  let string=userInput[0];
  let reversedString = string.split("").reverse().join("");
  console.log(reversedString);
});