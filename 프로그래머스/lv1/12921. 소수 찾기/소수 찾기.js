function solution(n = 3) {
  let cnt = 0;
  for (let i = 2; i <= n; i++) {
    checkIsPrimeNumber(i) && cnt++;
  }
  return cnt;
}

function checkIsPrimeNumber(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}