function solution(numbers = '011') {
  numbers = [...numbers].map(Number);

  const allPermutations = getAllPermutations(numbers).map(v =>
    parseInt(v.join(''))
  );
  return [...new Set(allPermutations)]
    .map(value => isPrime(value))
    .filter(v => v).length;
}

function getPermutations(arr, num) {
  const result = [];

  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, i, origin) => {
    const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const combinations = getPermutations(rest, num - 1);
    const attached = combinations.map(v => [fixed, ...v]);
    result.push(...attached);
  });

  return result;
}

function getAllPermutations(arr) {
  const result = [];

  arr.forEach((_, index, origin) => {
    result.push(...getPermutations(origin, index + 1));
  });

  return result;
}

function isPrime(num) {
  if (num === 1 || num === 0) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return num;
}