/*
N
R C: player
R C: goorm
1U 2D ... N개 주어짐 
3R 4L
.
.
N개 주어짐
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Area {
  count;
  command;
  isVisited = false;
  isDone = false;
};

let N;
let goorm = {};
let player = {};
let board = [];

rl.on('line', (line) => {
  if (!N) {
    N = parseInt(line); // parseInt 는 string 메소드가 아니고, ES5에 내장 되어 있는 함수이다.
  }
  else if (Object.keys(goorm).length < 2) {
    let [r, c] = line.split(' ')

    goorm.r = parseInt(r);
    goorm.c = parseInt(c);
  }
  else if (Object.keys(player).length < 2) {
    let [r, c] = line.split(' ')

    player.r = parseInt(r);
    player.c = parseInt(c);
  }
  else if (board.length < N) {
    let arr = line.split(' ');
    let line_arr = [];

    arr.forEach(value => {
      let input = new Area();

      input.count = parseInt(value[0]);
      input.command = value[1];
      line_arr.push(input);
    });
    board.push(line_arr);
    if (board.length >= N)
      rl.close();
  }
})

function transformFromMinusToPlus(num) {
  let div = Math.trunc(num / -N);

  div += 1;
  num += (div * N);
  return num;
}

function caseU(r, c, count) {
  let min;
  let i;
  let cnt = 0;

  afterR = r - count;
  if (afterR < 0) {
    min = afterR + N;
    i = N - 1;
    for (let j = r; j >= 0; j--) {
      if (board[j][c].isVisited === true) {
        board[j][c].isDone = true;
        j--;
        break;
      }
      cnt++;
      board[j][c].isVisited = true;
    }
    return [i + 1, c, cnt];
  }
  else {
    min = afterR;
    i = r;
  }
  for (; min <= i; i--) {
    if (board[i][c].isVisited === true) {
      board[i][c].isDone = true;
      i--;
      break;
    }
    cnt++;
    board[i][c].isVisited = true;
  }
  return [i + 1, c, cnt];
  // let i;
  // let max;
  // let cnt = 0;

  // afterR = r - count;
  // if (afterR < 0) {
  //   i = afterR + N;
  //   max = N;
  // }
  // else {
  //   i = afterR;
  //   max = r;
  // }
  // for (; i < max; i++) {
  //   if (board[i][c].isVisited === true) {
  //     board[i][c].isDone = true;
  //     i++;
  //     break;
  //   }
  //   cnt++;
  //   board[i][c].isVisited = true;
  // }
  // return [i - 1, c, cnt];
}

function moveOneCommand(count, command, r, c) {
  let cnt;

  // console.log(count, r, c)
  switch (command) {
    case 'U':
      [r, c, cnt] = caseU(r, c, count)
      break;
    case 'L':
      afterC = c - count;
      if (c < 0)
        c = transformFromMinusToPlus(c);
      break;
    case 'D':
      r += count;
      r %= N;
      break;
    case 'R':
      c += count;
      c %= N;
      break;
  }
  // console.log(r, c);
  return [r, c, cnt];
}

function startGame(R, C) {
  let r = R - 1;
  let c = C - 1;
  let ret = 0;

  while (1) {
    let obj = board[r][c];

    // console.log(obj);
    [r, c, cnt] = moveOneCommand(obj.count, obj.command, r, c);
    // console.log(r, c, cnt)
    ret += cnt;
    if (board[r][c].isDone === true)
      break;
  }
  return ret;
}

function resetBoard() {
  board.forEach((arr) => {
    arr.forEach((obj) => {
      obj.isVisited = false;
      obj.isDone = false;
    })
  })
}

function mainConsole(r, c, cnt, board) {
  console.log('r:', r, 'c:', c);
  console.log(cnt);
  console.log(board);
}

rl.on('close', () => {
  let goormCnt;
  let playerCnt;
  
  // goormCnt = startGame(goorm.r, goorm.c);
  // mainConsole(goorm.r, goorm.c, goormCnt, board);
  // resetBoard();
  playerCnt = startGame(player.r, player.c);
  mainConsole(player.r, player.c, playerCnt, board);
  // if (playerCnt > goormCnt) {
  //   console.log('player', playerCnt);
  // }
  // else {
  //   console.log('goorm', goormCnt);
  // }
  // console.log(goormCnt);
})

