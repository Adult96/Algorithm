const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
  input.split('').reduce((sum, num) => {
    return (sum += parseInt(num));
  }, 0)
);