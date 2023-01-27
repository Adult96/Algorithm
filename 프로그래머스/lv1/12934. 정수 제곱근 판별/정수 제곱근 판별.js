function solution(n = 3) {
  let answer = 0;
  let cnt = 1;
  while (true) {
    if (cnt ** 2 === n) {
      answer = (cnt + 1) ** 2;
      break;
    } else if (cnt ** 2 > n) {
      answer = -1;
      break;
    }
    cnt++;
  }

  return answer;
}