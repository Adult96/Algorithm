const solution = (n = 125) =>
  parseInt([...n.toString(3)].reverse().join(''), 3);