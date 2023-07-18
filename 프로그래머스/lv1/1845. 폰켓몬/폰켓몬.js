function solution(nums = [3, 1, 2, 3]) {
  const N = nums.length / 2;
  const parseNums = [...new Set(nums)].length;
  return parseNums > N ? N : parseNums;
}