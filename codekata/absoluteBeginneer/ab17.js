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
  const N=parseInt(userInput[0]);
  if (N===0) {
    console.log("Null");
    return;
  }
  let output = "";
  for(let i=1; i<=N; i++) {
    output += (9*i)+" ";
  }
  console.log(output.trim());
  //end-here
});