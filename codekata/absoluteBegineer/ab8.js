const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  const celsius = parseFloat(data);
  const fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
  console.log(fahrenheit);
  inp.close();
});
