function solution(genres, plays) {
  const hash = {
    arr: {},
    nums: {},
  };
  const answer = [];
  
  for (let i = 0; i < genres.length; i++) {
    if (hash.arr[genres[i]]) {
      hash.arr[genres[i]].push([i, plays[i]]);
      hash.nums[genres[i]] += plays[i];
    } else {
      hash.arr[genres[i]] = [[i, plays[i]]];
      hash.nums[genres[i]] = plays[i];
    }
  }

  let hashNums = [];

  for (const key in hash.nums) {
    hash.arr[key].sort((a, b) => b[1] - a[1]);
    hashNums.push([hash.nums[key], key]);
  }

  hashNums.sort((a, b) => b[0] - a[0]);

  hashNums.forEach(key => {
    answer.push(hash.arr[key[1]].slice(0, 2).map(v => v[0]));
  });

  return answer.flat();
}