const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

solution(input);

function solution(input) {
  const arr = Array(input[0])
    .fill(0)
    .map((_, i) => i + 1);

  const permutations = getPermutations(arr, input[1]);

  permutations.forEach(v => {
    console.log(...v);
  });
}

function getPermutations(arr, num) {
  const result = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutaion = getPermutations(rest, num - 1);
    const attahed = permutaion.map(v => [fixed, ...v]);

    result.push(...attahed);
  });

  return result;
}