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
  let sum=0;
  for(let i=1; i<=N; i++){
    sum+=i;
}
  console.log(sum);
});