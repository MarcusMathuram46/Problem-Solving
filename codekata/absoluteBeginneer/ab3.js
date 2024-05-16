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
var a=parseInt(userInput[0]);
var n1=a*1;
var n2=a*2;
var n3=a*3;
console.log(n1+" "+n2+" "+n3)
});