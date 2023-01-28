function solution(N, stages) {
  let arr = [stages];
  let rank = [];

  for (let i = 1; i <= N; i++) {
    const stage = arr[i - 1].filter(v => v > i);
    arr.push(stage);

    const now = arr[i - 1].length;
    const next = arr[i].length;
    const failStatus = (now - next) / now;

    rank.push([failStatus, i]);
  }

  rank.sort((a, b) => b[0] - a[0]);
  return rank.map(v => v[1]);
}