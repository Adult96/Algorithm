function solution(n = 5) {
  let answer = [1, 2];

  for (let i = 2; i < n - 1; i++) {
    answer.push((answer[i - 1] + answer[i - 2]) % 1234567);
  }

  return answer[n - 2];
}