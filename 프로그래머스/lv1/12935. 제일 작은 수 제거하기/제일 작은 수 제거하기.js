const solution = (arr = [4, 3, 2, 1]) =>
  arr.length === 1 ? [-1] : arr.filter(v => v !== Math.min(...arr));