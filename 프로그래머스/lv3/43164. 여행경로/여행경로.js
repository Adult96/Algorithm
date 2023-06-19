function solution(
  tickets = [
    ['ICN', 'AAD'],
    ['ICN', 'JFK'],
    ['JFK', 'ICN'],
  ]
) {
  const list = {};

  for (let ticket of tickets) {
    const [current, next] = ticket;

    if (!list[current]) {
      list[current] = [];
    }

    list[current].push(next);
  }

  for (const key in list) {
    list[key].sort();
  }

  let stack = ['ICN'];
  let path = [];

  while (stack.length) {
    const airport = stack[stack.length - 1];
    if (!list[airport] || list[airport].length === 0) {
      path.push(stack.pop());
    } else {
      stack.push(list[airport].shift());
    }
  }

  return path.reverse();
}