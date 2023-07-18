function solution(
  progresses = [20, 99, 93, 30, 55, 10],
  speeds = [5, 10, 1, 1, 30, 5]
) {
  const calcDays = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

  let cnt = 1;
  let maxNum = calcDays[0];
  let answer = [];
  for (let i = 1; i <= calcDays.length; i++) {
    if (maxNum >= calcDays[i]) {
      cnt++;
    } else {
      answer.push(cnt);
      cnt = 1;
      maxNum = calcDays[i];
    }
  }

  return answer;
}