const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = n.split(' ').map(Number);

console.log(solution(M, input));

function solution(strLen, input) {
  const obj = {};

  for (key of input) {
    if (key.length >= strLen) {
      obj[key] = (obj[key] || 0) + 1;
    }
  }

  const sortObj = Object.keys(obj).sort(
    (a, b) => obj[b] - obj[a] || b.length - a.length || a.localeCompare(b)
  );

  return sortObj.join('\n');
}