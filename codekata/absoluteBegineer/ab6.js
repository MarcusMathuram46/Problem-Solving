const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  const kilometers = parseInt(data);
  const meters = kilometers * 1000;
  const centimeters = kilometers * 100000;
  console.log(meters);
  console.log(centimeters);
  inp.close();
});
