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
  let N=parseInt(userInput[0]);
  if (N<0){
    console.log("Error");
  }else if (N===0){
    console.log(0);
  }else{
    console.log(N*N);
  }
});