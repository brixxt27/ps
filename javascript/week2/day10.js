const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let player = {};
let goormi = {};
let rawBoard = [];

rl.on('line', (line) => {
  if (!N) {
    N = parseInt(line); // parseInt 는 string 메소드가 아니고, ES5에 내장 되어 있는 함수이다.
  }
  else if (Object.keys(player).length < 2) {
    let [r, c] = line.split(' ')

    player.r = parseInt(r);
    player.c = parseInt(c);
  }
  else if (Object.keys(goormi).length < 2) {
    let [r, c] = line.split(' ')

    goormi.r = parseInt(r);
    goormi.c = parseInt(c);
  }
  else if (rawBoard.length < N) {

  }
})
rl.on('close', () => {

})

