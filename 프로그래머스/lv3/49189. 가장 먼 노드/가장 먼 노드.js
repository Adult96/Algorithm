function solution(
  n = 6,
  edge = [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ]
) {
  const graph = Array.from(Array(n + 1), () => []);
  const distance = Array(n + 1).fill(-1);
  const queue = [1];

  distance[1] = 0;
  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  while (queue.length > 0) {
    const node = queue.shift();
    for (const nextNode of graph[node]) {
      if (distance[nextNode] === -1) {
        distance[nextNode] = distance[node] + 1;
        queue.push(nextNode);
      }
    }
  }

  console.log(graph, distance, queue);

  const maxDist = Math.max(...distance);
  return distance.filter(dist => dist === maxDist).length;
}