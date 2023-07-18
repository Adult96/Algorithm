function solution(
  clothes = [
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]
) {
  let hash = {};
  let answer = 1;
  for (let i = 0; i < clothes.length; i++) {
    if (hash[clothes[i][1]]) hash[clothes[i][1]] += 1;
    else hash[clothes[i][1]] = 1;
  }

  for (const key in hash) {
    answer *= hash[key] + 1;
  }

  return answer - 1;
}