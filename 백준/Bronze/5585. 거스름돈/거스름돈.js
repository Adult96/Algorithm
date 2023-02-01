const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let change = 1000 - input;
const coin = [500, 100, 50, 10, 5, 1];
const result = coin.reduce((sum, value) => {
  if (change / value >= 1) {
    sum += Math.trunc(change / value);
    change -= value * Math.trunc(change / value);
  }
  return sum;
}, 0);

console.log(result);