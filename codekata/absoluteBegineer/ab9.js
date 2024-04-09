const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  const length = parseFloat(data);
  inp.once("line", (breadth) => {
    const area = (length * parseFloat(breadth)).toFixed(1);
    console.log(area);
    inp.close();
  });
});
