function solution(number = '4321', k = 1) {
  let stack = [0];
  let cnt = 0;
  for (let i = 0; i < number.length; i++) {
    while (cnt <= k && stack[stack.length - 1] < number[i]) {
      stack.pop(number[i]);
      cnt++;
    }
    stack.push(number[i]);
  }

  if (number.length - k !== stack.length) {
    stack = stack.slice(0, stack.length - 1);
  }

  return stack.join('');
}