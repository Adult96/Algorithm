const solution = (n = '1 2 3 4') => {
  const arry = n.split(' ').map((v) => parseInt(v));
  return `${Math.min(...arry)} ${Math.max(...arry)}`;
};