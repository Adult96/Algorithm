function solution(
  n = 3,
  computers = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]
) {
  let answer = 0;
  const visited = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  function dfs(index) {
    visited[index] = true;

    for (let i = 0; i < n; i++) {
      if (computers[index][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  return answer;
}