const solution = (n = 12345) =>
  (n + '')
    .split('')
    .reverse()
    .map((v) => parseInt(v));