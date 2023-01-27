const solution = (n = 118372) =>
  Number(
    (n + '')
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );