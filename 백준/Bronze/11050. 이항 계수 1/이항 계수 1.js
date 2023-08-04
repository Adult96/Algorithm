const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(solution(input));

function solution(input) {
  const [n, k] = input;
  let calc = 1;
  let first = 1;
  let second = 1;

  for (let i = 1; i <= n; i++) {
    first *= i;
  }

  for (let i = 1; i <= k; i++) {
    second *= i;
  }

  for (let i = 1; i <= n - k; i++) {
    calc *= i;
  }

  return first / (second * calc);
}