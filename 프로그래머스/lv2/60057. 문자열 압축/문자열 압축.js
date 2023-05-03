function solution(s) {
  let result = [];
  let stack = '';
  let minLen = 0;

  for (let i = 1; i <= s.length; i++) {
    let cutLen = '';
    let cnt = 1;

    for (let j = 0; j < s.length; j += i) {
      stack = cutLen;
      cutLen = s.slice(j, j + i);
      if (stack === cutLen) {
        cnt++;
      } else {
        if (cnt !== 1) {
          result.push(cnt);
        }
        result.push(stack);
        cnt = 1;
      }
    }

    if (cnt !== 1) {
      result.push(cnt);
    }
    result.push(cutLen);
    cnt = 1;

    if (i === 1) {
      minLen = result.join('').length;
    }

    if (minLen > result.join('').length) {
      minLen = result.join('').length;
    }

    stack = '';
    result = [];
  }

  return minLen;
}