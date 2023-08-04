const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));

function solution(input) {
  let cnt = 0;
  let set = new Set();

  while (input.length) {
    const str = input.shift();

    if (str === 'ENTER') {
      set.clear();
      continue;
    }

    if (!set.has(str)) {
      set.add(str);
      cnt++;
    }
  }

  return cnt;
}