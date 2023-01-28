function solution(
  n = 5,
  arr1 = [9, 20, 28, 18, 11],
  arr2 = [30, 1, 21, 17, 28]
) {
  return arr1.map((v, i) =>
    zero(n, (v | arr2[i]).toString(2))
      .replace(/1/g, '#')
      .replace(/0/g, ' ')
  );
}

function zero(n, bit) {
  return '0'.repeat(n - bit.length) + bit;
}