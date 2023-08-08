const fs = require('fs');
const [n,...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
  input
    .sort((a, b) => a - b)
    .map(Number)
    .join('\n')
);