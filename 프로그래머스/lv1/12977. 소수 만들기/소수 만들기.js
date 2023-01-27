function solution(nums = [1, 2, 7, 6, 4]) {
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        cnt += 1;
        for (let l = 2; l <= Math.sqrt(sum); l++) {
          if (sum % l === 0) {
            cnt -= 1;
            break;
          }
        }
      }
    }
  }

  return cnt;
}