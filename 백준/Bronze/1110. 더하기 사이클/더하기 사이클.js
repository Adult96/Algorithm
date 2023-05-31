const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  let addNum = 0;
  let newNum = 0;
  let cnt = 0;

  input = input.padStart(2, '0');

  while (newNum !== input) {
    if (!cnt) newNum = input;

    addNum = (parseInt(newNum[0]) + parseInt(newNum[1])).toString();
    newNum = newNum[newNum.length - 1] + addNum[addNum.length - 1];
    cnt++;
  }

  return cnt;
}

console.log(solution(input));