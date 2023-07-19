function solution(word) {
  const arr = ['A', 'E', 'I', 'O', 'U'];
  let cnt = 1;
  let dict = {};

  for (let i = 0; i < 5; i++) {
    dfs(arr[i]);
  }

  function dfs(s) {
    if (s.length > 5) return;
    dict[s] = cnt++;

    for (let i = 0; i < 5; i++) {
      dfs(s + arr[i]);
    }
  }

  return dict[word];
}