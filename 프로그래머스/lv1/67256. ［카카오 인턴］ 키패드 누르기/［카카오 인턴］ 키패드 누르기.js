function solution(numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], hand = 'right') {
  const keypad = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    '*': [4, 1],
    0: [4, 2],
    '#': [4, 3],
  };

  let nowPosL = [4, 1];
  let nowPosR = [4, 3];

  let answer = '';

  for (const num of numbers) {
    let numLocation = keypad[num];
    if (numLocation[1] === 1) {
      answer += 'L';
      nowPosL = numLocation;
    } else if (numLocation[1] === 3) {
      answer += 'R';
      nowPosR = numLocation;
    } else {
      const left =
        Math.abs(nowPosL[0] - numLocation[0]) +
        Math.abs(nowPosL[1] - numLocation[1]);
      const right =
        Math.abs(nowPosR[0] - numLocation[0]) +
        Math.abs(nowPosR[1] - numLocation[1]);

      if (left < right) {
        answer += 'L';
        nowPosL = numLocation;
      } else if (left > right) {
        answer += 'R';
        nowPosR = numLocation;
      } else {
        if (hand === 'left') {
          nowPosL = numLocation;
          answer += 'L';
        } else {
          nowPosR = numLocation;
          answer += 'R';
        }
      }
    }
  }

  return answer;
}