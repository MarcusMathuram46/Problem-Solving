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
    const length=userInput[0];
    const breadth=userInput[1];
    const area=(length*parseFloat(breadth)).toFixed(1);
    console.log(area);
    

  //end-here
});