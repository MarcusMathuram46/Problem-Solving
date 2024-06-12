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
    let A = parseInt(userInput[0]);
    let B = parseInt(userInput[1]);
    let C = parseInt(userInput[2]);

    function findLargest(a,b,c){
        if (a>=b && a>=c){
            return a;
        } else if (b>=a && b>=c){
            return b;
        } else{
            return c;
        }
    }

    let largest = findLargest(A,B,C);
    console.log(largest); 
});