function solution(s = 'z', n = 1) {
  const lower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const upper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (lower.includes(s[i])) {
      const lowIndex = lower.indexOf(s[i]) + n;
      const lowCase = lowIndex > 25 ? lowIndex - 26 : lowIndex;
      arr.push(lower[lowCase]);
    } else if (upper.includes(s[i])) {
      const upperIndex = upper.indexOf(s[i]) + n;
      const lowCase = upperIndex > 25 ? upperIndex - 26 : upperIndex;
      arr.push(upper[lowCase]);
    } else {
      arr.push(' ');
    }
  }

  return arr.join('');
}