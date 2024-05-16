const readline = require('readline');
const inp = readline.createInterface({
 input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

let number=userInput[0];
let cube=number **3;
console.log(cube)

});