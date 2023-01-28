function solution(N = 5, stages = [2, 1, 2, 6, 2, 4, 3, 3]) {
  let arr = [stages];
  let rank = [];
  stages.sort();

  for (let i = 1; i <= N; i++) {
    const stage = arr[i - 1].filter(v => v > i);
    arr.push(stage);

    const failStatus = (arr[i - 1].length - arr[i].length) / arr[i - 1].length;
    rank.push([failStatus, i]);
  }
  
  rank = rank.sort((a, b) => b[0] - a[0]).map(v => v[1]);
  return rank;
}