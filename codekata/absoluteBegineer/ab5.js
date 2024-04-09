const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  const numbers = data.split(" ").map(Number);
  const smallerNumber = Math.min(...numbers);
  console.log(smallerNumber);
  inp.close();
});
