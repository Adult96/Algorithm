function solution(nums = [3, 1, 2, 3]) {
  const answer = [...new Set(nums)];
  return answer.length >= nums.length / 2 ? nums.length / 2 : answer.length;
}