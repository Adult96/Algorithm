function solution(board, moves) {
  let drawing = [];
  let cnt = 0;
  let result = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] > 0) {
        drawing.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  while (true) {
    if (drawing[cnt] === drawing[cnt + 1]) {
      drawing.splice(cnt, 2);
      cnt = 0;
      result++;
    } else {
      cnt++;
    }

    if (cnt === drawing.length) {
      break;
    }
  }

  return result * 2;
}