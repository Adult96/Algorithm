function solution(sizes) {
  let biggerSideMax = [];
  let smallerSideMax = [];

  for (let index = 0; index < sizes.length; index++) {
    biggerSideMax.push(Math.max(...sizes[index]));
    smallerSideMax.push(Math.min(...sizes[index]));
  }

  return Math.max(...biggerSideMax) * Math.max(...smallerSideMax);
}