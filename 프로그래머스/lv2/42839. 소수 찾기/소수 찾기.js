function solution(numbers) {
  numbers = numbers.split('').map(Number);

  const permutations = getAllPermutations(numbers).map(v =>
    parseInt(v.join(''))
  );

  return [...new Set(permutations)].map(v => isPrime(v)).filter(v => v).length;
}

function getPermutataions(arr, num) {
  const result = [];

  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutation = getPermutataions(rest, num - 1);
    const attahed = permutation.map(v => [fixed, ...v]);

    result.push(...attahed);
  });

  return result;
}

function getAllPermutations(arr) {
  const result = [];

  arr.forEach((_, index, origin) => {
    result.push(...getPermutataions(origin, index + 1));
  });

  return result;
}

function isPrime(num) {
  if (num === 0 || num === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}