const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  const number = Math.round(parseFloat(data));
  
  if (number === 0) {
    console.log("Zero");
  } else if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
  
  inp.close();
});
