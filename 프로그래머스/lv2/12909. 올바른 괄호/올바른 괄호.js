function solution(s) {
  const stack = [];
  const open = '(';
  const close = ')';

  if (s[0] === close || s[s.length - 1] === open || s.length % 2 === 1)
    return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i].includes(open)) {
      stack.push(open);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
}