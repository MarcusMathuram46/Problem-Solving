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
  const Kilometers=parseInt(userInput[0]);
  const Meters=Kilometers*1000;
  const CentiMetres=Kilometers*100000;
  console.log(Meters);  
  console.log(CentiMetres);

  //end-here
});