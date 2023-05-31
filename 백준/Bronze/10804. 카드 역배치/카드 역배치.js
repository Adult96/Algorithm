const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));

function solution(input) {
  let array = Array(20)
    .fill(0)
    .map((_, i) => i + 1);

  input.forEach(v => {
    const first = array.slice(0, v[0] - 1);
    const middle = array.slice(v[0] - 1, v[1]).reverse();
    const last = array.slice(v[1], 20);

    array = first.concat(middle).concat(last);
  });
  return array.join(' ');
}

console.log(solution(input));