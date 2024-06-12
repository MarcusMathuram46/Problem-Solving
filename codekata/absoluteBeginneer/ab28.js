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
  let number=parseInt(userInput[0]);
  function sumOfDigits(number){
    let sum=0;
    let numStr=number.toString();
    for(let char of numStr){
        sum+=parseInt(char);
    }
    return sum;
  }
  const result= sumOfDigits(number);
  console.log(result);
});