function solution(n = 3, left = 2, right = 5) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const x = i % n;
    const y = Math.floor(i / n);

    answer.push(Math.max(x, y) + 1);
  }

  return answer;
}