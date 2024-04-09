const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  const radius = parseFloat(data);

  if (radius < 0) {
    console.log("Error");
  } else {
    const circumference = (2 * Math.PI * radius).toFixed(2);
    console.log(circumference);
  }

  inp.close();
});
