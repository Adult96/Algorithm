function solution(n = 10, k = 3) {
  return n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
}