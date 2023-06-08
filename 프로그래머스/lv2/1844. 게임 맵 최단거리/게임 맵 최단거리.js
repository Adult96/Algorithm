function solution(
  maps = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]
) {
  const lenX = maps[0].length;
  const lenY = maps.length;
  const goalX = lenX - 1;
  const goalY = lenY - 1;

  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (curY === goalY && curX === goalX) return move;

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (ny >= 0 && ny < lenY && nx >= 0 && nx < lenX && maps[ny][nx] === 1) {
        queue.push([ny, nx, move + 1]);
        maps[ny][nx] = 0;
      }
    }
  }

  return -1;
}
