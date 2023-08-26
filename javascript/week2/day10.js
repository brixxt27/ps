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

function calcurateMove(count, command, r, c) {
  // let afterR;
  // let afterC;

  switch (command) {
    case 'U':
      // afterR = r - count;
      if (r < 0)
        r = transformFromMinusToPlus(r);
      break;
    case 'L':
      c -= count;
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
  return [r, c];
}

function startGame(R, C) {
  let r = R - 1;
  let c = C - 1;
  let ret = 0;

  while (1) {
    let obj = board[r][c];

    // console.log(obj);
    // ret++;
    // obj.isVisited = true;
    [r, c] = calcurateMove(obj.count, obj.command, r, c);
    // if (board[r][c].isVisited === true)
    //   break;
  }
  return ret;
}

rl.on('close', () => {
  let goormiCnt;;
  let playerCnt;
  
  // goormiCnt = startGame(goorm.r, goorm.c);
  playerCnt = startGame(player.r, player.c);
  // if (playerCnt > goormiCnt) {
  //   console.log('player', playerCnt);
  // }
  // else {
  //   console.log('goorm', goormiCnt);
  // }
  console.log(board);
})

