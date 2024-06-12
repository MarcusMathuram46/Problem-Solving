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
    const[A,B,C]=userInput[0].split(" ").map(Number);
    const discriminant=B*B-4*A*C;
    if(discriminant<0){
        console.log("No roots found");
    }else{
        const root1=(-B+Math.sqrt(discriminant))/(2*A)
        const root2=(-B-Math.sqrt(discriminant))/(2*A)
        const formattedRoot1=root1.toFixed(2);
        const formattedRoot2=root2.toFixed(2);
        console.log(formattedRoot1);
        console.log(formattedRoot2);
    }
});