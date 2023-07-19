function solution(
  n = 3,
  computers = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]
) {
  let answer = 0;
  let visited = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  function dfs(i) {
    visited[i] = true;

    for (let j = 0; j < computers[0].length; j++) {
      if (computers[i][j] && !visited[j]) {
        dfs(j);
      }
    }
  }

  return answer;
}