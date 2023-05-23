function solution(progresses = [93, 30, 55], speeds = [1, 30, 5]) {
  const answer = [1];
  let maxNum = 0;
  let cnt = 0;

  const buildDays = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

  buildDays.forEach((v, i, arr) => {
    if (i) {
      if (maxNum < v) {
        cnt++;
        maxNum = v;
        answer.push(1);
      } else {
        answer[cnt]++;
      }
    } else {
      maxNum = v;
    }
  });

  return answer;
}