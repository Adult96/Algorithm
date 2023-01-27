const solution = (x = 12) =>
  x % [...(x + '')].reduce((sum, num) => (sum += Number(num)), 0)
    ? false
    : true;