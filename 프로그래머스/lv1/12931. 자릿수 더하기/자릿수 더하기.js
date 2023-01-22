const solution = (n = 123) =>
  [...n.toString()].reduce((a, b) => (a += parseInt(b)), 0);