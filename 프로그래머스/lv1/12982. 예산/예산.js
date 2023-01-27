function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .map(v => (budget = budget - v))
    .filter(v => v >= 0).length;
}