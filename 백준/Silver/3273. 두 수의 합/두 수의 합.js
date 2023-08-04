const fs = require('fs');
const [num, input, x] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n] = num.trim().split(' ').map(Number);
const inputArr = input.trim().split(' ').map(Number);
const [xNum] = x.trim().split(' ').map(Number);

console.log(solution(n, inputArr, xNum));

function solution(n, inputArr, xNum) {
  let cnt = 0;

  for (let i = 0; i < inputArr.length - 1; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[i] + inputArr[j] === xNum) {
        cnt++;
      }
    }
  }

  return cnt;
}