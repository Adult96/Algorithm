function solution(s, n) {
  const low = 'abcdefghijklmnopqrstuvwxyz';
  const up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const answer = [...s].map(v => {
    const indexofLow = low.indexOf(v);
    const indexofUp = up.indexOf(v);

    const sendLow = indexofLow + n > 25 ? indexofLow + n - 26 : indexofLow + n;
    const sendUp = indexofUp + n > 25 ? indexofUp + n - 26 : indexofUp + n;

    return low.includes(v) ? low[sendLow] : up.includes(v) ? up[sendUp] : ' ';
  });

  return answer.join('');
}