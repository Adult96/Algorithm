function solution(clothes) {
  let result = 1;
  let obj = {};
  clothes.forEach(v => {
    if (obj[v[1]]) {
      obj[v[1]] += 1;
    } else {
      obj[v[1]] = 1;
    }
  });
  for (let key in obj) {
    result *= obj[key] + 1;
  }
  return result - 1;
}