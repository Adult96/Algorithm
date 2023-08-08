const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(
  [...new Set(input)]
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join('\n')
);