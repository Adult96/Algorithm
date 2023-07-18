function solution(
  operations = ['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1']
) {
  operations = operations.map(v => v.split(' '));

  let queue = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] === 'I') {
      queue.push(parseInt(operations[i][1]));
    } else {
      if (operations[i][1] === '1') {
        const maxNum = Math.max(...queue);
        const maxIndex = queue.findIndex(v => v === maxNum);
        queue.splice(maxIndex, 1);
      } else {
        const minNum = Math.min(...queue);
        const minIndex = queue.findIndex(v => v === minNum);
        queue.splice(minIndex, 1);
      }
    }
  }

  const max = Math.max(...queue) || 0;
  const min = Math.min(...queue) || 0;
  return [max === -Infinity ? 0 : max, min === Infinity ? 0 : min];
}