function solution(k, tangerine) {
  const cntObj = {};

  tangerine.forEach(v => {
    cntObj[v] ? (cntObj[v] += 1) : (cntObj[v] = 1);
  });

  const answer = Object.values(cntObj).sort((a, b) => b - a);

  for (let i = 0; i < answer.length; i++) {
    if (k - answer[i] > 0) k -= answer[i];
    else return i + 1;
  }
}