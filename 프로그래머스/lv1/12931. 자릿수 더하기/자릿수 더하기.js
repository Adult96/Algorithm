const solution = (n = 1234578) =>
  [...n.toString()].reduce((sum, num) => (sum += Number(num)), 0);