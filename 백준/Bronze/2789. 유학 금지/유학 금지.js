const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  return [...input].filter(v => !'CAMBRIDGE'.includes(v)).join('');
}

console.log(solution(input));