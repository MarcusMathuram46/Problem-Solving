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
  const [num1, num2] = userInput[0].split(" ").map(Number);
  const min=Math.min(num1,num2);
  let hcf=1;

  for(let i=min; i>0;i--){
    if(num1%i===0&&num2%i===0){
        hcf=i;
        break;
    }
  }
  console.log(hcf);
});