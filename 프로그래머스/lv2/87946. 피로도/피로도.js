function solution(
  k = 80,
  dungeons = [
    [80, 20],
    [50, 40],
    [30, 10],
  ]
) {
  const answer = [];

  const permutations = getPermutations(dungeons, dungeons.length);

  permutations.forEach(arr => {
    answer.push(getMaxDungeons(arr, k));
  });

  return Math.max(...answer.filter(v => v));
}

function getPermutations(arr, num) {
  const result = [];

  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, num - 1);
    const attahed = permutations.map(v => [fixed, ...v]);
    result.push(...attahed);
  });

  return result;
}

function getMaxDungeons(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] <= k) {
      k = k - arr[i][1];
    } else {
      return i;
    }
  }

  return arr.length;
}