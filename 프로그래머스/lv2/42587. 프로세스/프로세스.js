function solution(priorities = [1, 1, 9, 1, 1, 1], location = 0) {
  let answer = [];
  let list = priorities.map((_, i) => i);
  let maxNum = Math.max(...priorities);

  while (priorities.length) {
    if (priorities[0] < maxNum) {
      priorities.push(priorities.shift());
      list.push(list.shift());
    } else {
      answer.push([list.shift(), priorities.shift()]);
      maxNum = Math.max(...priorities);
    }
  }

  return answer.findIndex(v => v[0] === location) + 1;
}