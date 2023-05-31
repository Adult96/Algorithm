const solution = (a = 10, b = 2) => {
  const max = a + b;

  for (let i = 3; i < a; i++) {
    if (max % i !== 0) continue;

    const x = max / i;
    const y = i;
    if ((x - 2) * (y - 2) === b) return [x, y];
  }
};