function solution(brown, yellow) {
  const max = brown + yellow;

  for (let i = 3; i < brown; i++) {
    if (max % i !== 0) continue;

    const x = max / i;
    const y = i;
    if ((x - 2) * (y - 2) === yellow) return [x, y];
  }
}