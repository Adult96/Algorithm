function solution(
  ticket = [
    ['ICN', 'A'],
    ['A', 'C'],
    ['A', 'D'],
    ['D', 'B'],
    ['B', 'A'],
  ]
) {
  ticket = ticket.sort((a, b) => a[1].localeCompare(b[1]));

  const answer = ['ICN'];
  const visited = Array(ticket.length).fill(false);

  dfs('ICN');

  function dfs(target) {
    for (let i = 0; i < ticket.length; i++) {
      if (target === ticket[i][0] && !visited[i]) {
        visited[i] = true;
        answer.push(ticket[i][1]);
        dfs(ticket[i][1]);

        if (answer.length === ticket.length + 1) return true;
        answer.pop();
        visited[i] = false;
      }
    }
  }

  return answer;
}