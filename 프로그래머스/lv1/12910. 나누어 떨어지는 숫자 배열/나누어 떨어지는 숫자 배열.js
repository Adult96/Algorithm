const solution = (arr = [5, 9, 7, 10], divisor = 5) => {
  const answer = arr.filter(v => !(v % divisor)).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
};
