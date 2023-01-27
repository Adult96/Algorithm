function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let arr = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % one.length]) arr[0] += 1;
    if (answers[i] === two[i % two.length]) arr[1] += 1;
    if (answers[i] === three[i % three.length]) arr[2] += 1;
  }

  let max = Math.max(...arr);
  let answer = [];
  if (max === arr[0]) answer.push(1);
  if (max === arr[1]) answer.push(2);
  if (max === arr[2]) answer.push(3);

  return answer;
}