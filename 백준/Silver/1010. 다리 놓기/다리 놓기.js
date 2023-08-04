const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const inputArr = input.map(v => v.split(' ').map(Number));

inputArr.forEach(arr => {
  console.log(solution(arr));
});

function solution(arr) {
  const [n, m] = arr;
  return Math.round(factorial(m) / (factorial(n) * factorial(m - n)));
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}