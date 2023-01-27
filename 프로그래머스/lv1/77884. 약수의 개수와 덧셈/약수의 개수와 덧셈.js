function solution(left = 13, right = 17) {
  let cnt = 0;
  let answer = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt += 1;
      }
    }
    cnt % 2 ? (answer = answer - i) : (answer = answer + i);
    cnt = 0;
  }

  return answer;
}