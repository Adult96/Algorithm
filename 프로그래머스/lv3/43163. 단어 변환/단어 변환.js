function solution(
  begin = 'hit',
  target = 'cog',
  words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
) {
  const queue = [[begin, 0]];

  if (!words.includes(target)) return 0;

  while (queue.length) {
    const [currentWord, move] = queue.shift();

    if (target === currentWord) return move;

    for (let i = 0; i < words.length; i++) {
      if (words[i] && wordCheck(currentWord, words[i])) {
        queue.push([words[i], move + 1]);
        words[i] = false;
      }
    }
  }
}

function wordCheck(word1, word2) {
  let diffent = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diffent++;
    if (diffent >= 2) return false;
  }

  return diffent === 1;
}