function solution(
  lottos = [0, 0, 0, 0, 0, 0],
  win_nums = [38, 19, 20, 40, 15, 25]
) {
  const rank = [6, 5, 4, 3, 2, 1];
  const zero = lottos.filter(v => !v).length;

  const cnt = win_nums.reduce((cnt, value, index) => {
    if (lottos.includes(value)) {
      return (cnt += 1);
    }
    return cnt;
  }, 0);

  return [
    rank[cnt + zero < 2 ? 0 : cnt + zero - 1],
    rank[cnt < 2 ? 0 : cnt - 1],
  ];
}