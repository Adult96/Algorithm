function solution(s) {
  let stack = [];

  if (s[0] === ')' || s[s.length - 1] === '(') return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else stack.pop();
  }

  return !stack.length;
}