function solution(num = 626331) {
  let cnt = 0;
  while (cnt < 500) {
    if (num === 1) {
      return cnt;
    }

    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num = num / 2;
    }
    cnt++;
  }

  return -1;
}