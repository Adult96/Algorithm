const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' '));

console.log(
  input
    .sort((a, b) => a[0] - b[0])
    .map(v => v.join(' '))
    .join('\n')
);