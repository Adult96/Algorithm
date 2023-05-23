function solution(arr = [1, 1, 3, 3, 0, 1, 1]) {
  return arr.filter((v, i, arr) => v !== arr[i + 1]);
}