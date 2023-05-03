function solution(n = 7) {
  let answer = Array(n).fill(0);

  answer[1] = 1;
  answer[2] = 2;
  for (let i = 3; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  return answer[n];
}