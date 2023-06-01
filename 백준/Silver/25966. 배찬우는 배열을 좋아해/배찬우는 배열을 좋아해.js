const { log } = require('console');
const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));

const [N, M, Q] = input.shift();
const array2 = input.splice(0, N);
const listQ = input;

function solution(N, M, Q, array2, listQ) {
  for (let i = 0; i < Q; i++) {
    if (listQ[i][0]) {
      if (listQ[i][1] === listQ[i][2]) continue;

      const swap1 = array2[listQ[i][1]];
      const swap2 = array2[listQ[i][2]];

      array2[listQ[i][1]] = swap2;
      array2[listQ[i][2]] = swap1;
    } else {
      array2[listQ[i][1]][listQ[i][2]] = listQ[i][3];
    }
  }

  return array2.map(v => v.join(' ')).join('\n');
}

console.log(solution(N, M, Q, array2, listQ));