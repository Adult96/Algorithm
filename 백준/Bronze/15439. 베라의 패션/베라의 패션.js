const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();


console.log(solution(input));

function solution(n) {
  return n * (n - 1);
}