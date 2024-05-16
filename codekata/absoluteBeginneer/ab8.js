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
    const celsius=parseFloat(userInput[0]);
    const fahrenheit=((celsius*9/5)+32).toFixed(2);
    console.log(fahrenheit);
  //end-here
});