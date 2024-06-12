const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
function calculateEquilateralTriangleArea(a){
var area=1/4*(3**(1/2)*sideLength**2);
return area.toFixed(2);
}
var sideLength= +userInput[0];
var area = calculateEquilateralTriangleArea(sideLength);
console.log(area)
});