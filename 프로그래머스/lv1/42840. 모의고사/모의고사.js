function solution(answers = [1, 2, 3, 4, 5]) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const person = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) person[0] += 1;
    if (two[i % two.length] === answers[i]) person[1] += 1;
    if (three[i % three.length] === answers[i]) person[2] += 1;
  }

  const max = Math.max(...person);
  const result = [];
  if (max === person[0]) result.push(1);
  if (max === person[1]) result.push(2);
  if (max === person[2]) result.push(3);

  return result;
}