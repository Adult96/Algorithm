function solution(numbers = [1, 2, 3, 4, 6, 7, 8, 0]) {
  return 45 - numbers.reduce((s, n) => (s += n),0);
}