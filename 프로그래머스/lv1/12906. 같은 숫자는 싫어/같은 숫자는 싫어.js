const solution = (arr = [1, 1, 3, 3, 0, 1, 1]) =>
  arr.filter((v, i) => v !== arr[i + 1]);