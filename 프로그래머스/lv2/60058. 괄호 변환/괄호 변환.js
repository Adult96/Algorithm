function solution(p) {
  if (!p) return '';

  let u = '';
  let v = '';
  let cnt = 0;

  for (let i = 0; i < p.length; i++) {
    cnt += p[i] === '(' ? 1 : -1;
    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  if (u[0] === '(' && u[u.length - 1] === ')') {
    return u + solution(v);
  } else {
    let str = '(' + solution(v) + ')';
    u = u.slice(1, u.length - 1);
    for (let i = 0; i < u.length; i++) {
      str += u[i] === '(' ? ')' : '(';
    }
    return str;
  }
}