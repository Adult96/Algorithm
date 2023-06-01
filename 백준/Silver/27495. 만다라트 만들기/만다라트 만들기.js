const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' '));

function solution(input) {
  const middleGoals = getGoals(input);
  const middleGoalsMap = getSamllGoalsMap(input);
  const answer = [];

  for (let i = 0; i < middleGoals.length; i++) {
    for (let j = 0; j < 9; j++) {
      if (!j) answer.push(`#${i + 1}. ${middleGoals[i]}`);
      else
        answer.push(`#${i + 1}-${j}. ${middleGoalsMap[middleGoals[i]][j - 1]}`);
    }
  }

  return answer.join('\n');
}

function getGoals(arr, targetX = 4, targetY = 4) {
  return [
    arr[targetY - 1][targetX - 1],
    arr[targetY - 1][targetX],
    arr[targetY - 1][targetX + 1],
    arr[targetY][targetX - 1],
    arr[targetY][targetX + 1],
    arr[targetY + 1][targetX - 1],
    arr[targetY + 1][targetX],
    arr[targetY + 1][targetX + 1],
  ].sort();
}

function getSamllGoalsMap(arr) {
  const map = {
    1: [1, 4, 7],
    4: [1, 7],
    7: [1, 4, 7],
  };

  const result = {};

  Object.keys(map)
    .map(Number)
    .forEach(v => {
      for (let i = 0; i < map[v].length; i++) {
        const key = arr[v][map[v][i]];
        const value = getGoals(arr, map[v][i], v);
        result[key] = value;
      }
    });

  return result;
}

console.log(solution(input));