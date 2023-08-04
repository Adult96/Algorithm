const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());


console.log(factorial(input));

function factorial(n) {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}