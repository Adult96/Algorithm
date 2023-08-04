const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(input));

function solution(n) {
  let answer = 1;
  for (let i = 1; i <= Number(n); i++) {
    answer *= i;
  }

  return answer;
}