const solution = (n = '3people unFollowed me') =>
  n
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
    .join(' ');