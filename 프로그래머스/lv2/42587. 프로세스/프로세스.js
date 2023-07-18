function solution(priorities, location) {
  const prioritiesList = priorities.map((v, i) => [i, v]);
  let queue = [];

  while (priorities.length) {
    const maxNum = Math.max(...priorities);

    if (priorities[0] === maxNum) {
      queue.push(prioritiesList.shift());
      priorities.shift();
    } else {
      priorities.push(priorities.shift());
      prioritiesList.push(prioritiesList.shift());
    }
  }

  return queue.findIndex(v => v[0] === location) + 1;
}