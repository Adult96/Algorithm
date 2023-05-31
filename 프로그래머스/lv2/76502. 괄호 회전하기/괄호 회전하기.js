function solution(s = '{(})') {
  const parseArr = [...s];
  const open = '[{(';
  const close = ']})';

  let stack = [0, 0, 0];
  let list = [];
  let answer = 0;

  for (let i = 0; i < parseArr.length; i++) {
    for (let j = 0; j < parseArr.length; j++) {
      if (open.includes(parseArr[j])) {
        const index = open.indexOf(parseArr[j]);

        stack[index]++;
        list.push(index);
      }
      if (close.includes(parseArr[j])) {
        const index = close.indexOf(parseArr[j]);
        const pop = list.pop();

        stack[index]--;

        if (pop !== index) break;
      }

      if (stack[0] === -1 || stack[1] === -1 || stack[2] === -1) break;
    }

    if (stack[0] === 0 && stack[1] === 0 && stack[2] === 0) answer++;
    stack = [0, 0, 0];
    list = [];
    parseArr.push(parseArr.shift());
  }

  return answer;
}