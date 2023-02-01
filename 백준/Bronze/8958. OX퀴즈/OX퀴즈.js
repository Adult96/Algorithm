const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let stack = 0;
const result = input
  .map((v, i) => {
    stack = 0;
    return (
      [...v]
        .map(str => (str === 'O' ? (stack += 1) : (stack = 0)))
        .reduce((sum, num) => (sum += num), 0) + '\n'
    );
  })
  .join('')
  .trim();

console.log(result);