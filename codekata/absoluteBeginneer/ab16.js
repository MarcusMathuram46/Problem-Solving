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
    function factorial(n){
        if(n ===0 || n===1 ) {
            return 1;
        }else{
            return n*factorial(n-1);
        }
    }
    let result = factorial(N);
    console.log(result);
});