function solution(nums = [1, 2, 3, 4, 5, 6]) {
  let answer = 0;
  let once = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        once = nums[i] + nums[j] + nums[k];
        console.log(nums[i], nums[j], nums[k]);
        answer++;
        for (let n = 2; n <= Math.sqrt(once); n++) {
          if (once % n === 0) {
            answer--;
            break;
          }
        }
      }
    }
  }
  return answer;
}