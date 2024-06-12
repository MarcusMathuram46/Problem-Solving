// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
// WRONG ANSWER
inp.on("close", () => {
  const inputNumber = userInput[0];
  function separateEvenOddDigits(number) {
    let evenDigits = [];
    let oddDigits = [];
    let numStr=number.toString();
    for (let char of numStr) {
      let digit = parseInt(char);

      if (digit % 2 === 0) {
        evenDigits.push(digit);
      } else {
        oddDigits.push(digit);
      }
    }
    console.log(evenDigits.join(" "));
    console.log(oddDigits.join(" "));
  }

  separateEvenOddDigits(inputNumber);
});
