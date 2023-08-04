const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));

function solution(input) {
  let set = new Set(['ChongChong']);

  input.forEach(contactArr => {
    const [a, b] = contactArr.split(' ');
    if (set.has(a) || set.has(b)) {
      set.add(a);
      set.add(b);
    }
  });

  return set.size;
}