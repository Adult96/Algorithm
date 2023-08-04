const { log } = require('console');
const fs = require('fs');
const [num, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n] = num.trim().split(' ').map(Number);
const inputArr = input.trim().split(' ').map(Number);

console.log(solution(n, inputArr));

function solution(n, inputArr) {
  return Math.max(...inputArr) * Math.min(...inputArr);
}