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
  const number=Math.round(parseFloat(userInput[0]));
  if(number===0){
      console.log("zero");
  }else if(number%2===0){
      console.log("Even")
  }else{
      console.log("Odd")
  }
});