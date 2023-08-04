const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

[
  average(n, input),
  middleNum(n, input),
  sameNum(n, input),
  calcMaxMin(n, input),
].forEach(v => console.log(v));

function average(n, arr) {
  const answer = Math.round(arr.reduce((sum, num) => (sum += num)) / n);
  return answer === -0 ? 0 : answer;
}

function middleNum(n, arr) {
  return arr.sort((a, b) => a - b)[Math.floor(n / 2)];
}

function sameNum(n, arr) {
  const counts = {};

  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  const modes = Object.keys(counts)
    .map(Number)
    .sort((a, b) => counts[b] - counts[a] || a - b);

  const maxCount = counts[modes[0]];

  let modeCount = 0;
  for (const mode of modes) {
    if (counts[mode] === maxCount) {
      modeCount++;
      if (modeCount === 2) return mode;
    }
  }

  return modes[0];
}

function calcMaxMin(n, arr) {
  return Math.max(...arr) - Math.min(...arr);
}