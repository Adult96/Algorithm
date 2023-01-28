function solution(n = 5, lost = [1], reserve = [1]) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let reserveDel = reserve.filter(v => !lost.includes(v));
  let lostDel = lost.filter(v => !reserve.includes(v));

  for (value of reserveDel) {
    if (lostDel.includes(value - 1)) {
      lostDel = lostDel.filter(v => v !== value - 1);
    } else if (lostDel.includes(value + 1)) {
      lostDel = lostDel.filter(v => v !== value + 1);
    }
  }

  return n - lostDel.length;
}