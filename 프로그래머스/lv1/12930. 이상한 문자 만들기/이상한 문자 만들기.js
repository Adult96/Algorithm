function solution(s = 'try hello world') {
  return s
    .split(' ')
    .map(v =>
      [...v].map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join('')
    )
    .join(' ');
}