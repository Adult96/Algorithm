function solution(dartResult = '1D2S0T') {
  const answer = [];
  let num = 0;
  for (let i = 0; i < dartResult.length; i++) {
    const numToDart = Number(dartResult[i]);
    if (!Number.isNaN(numToDart) && dartResult[i + 1] === '0') {
      num = 10;
      i += 1;
    } else if (!Number.isNaN(numToDart)) {
      num = numToDart;
    } else if (dartResult[i] === 'S') {
      answer.push(num ** 1);
    } else if (dartResult[i] === 'D') {
      answer.push(num ** 2);
    } else if (dartResult[i] === 'T') {
      answer.push(num ** 3);
    } else if (dartResult[i] === '#') {
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  
  return answer[0] + answer[1] + answer[2];
}