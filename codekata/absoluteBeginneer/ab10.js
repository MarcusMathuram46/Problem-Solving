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
  const radius=parseFloat(userInput[0]);
  if(radius<0){
      console.log("Error")
  }else{
      const circumference=(2*Math.PI*radius).toFixed(2);
      console.log(circumference);
  }
});