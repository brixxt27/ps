/**
 * 아래는 회복량이다.
 * bandage 1, 
 * medicine 7, 
 * painkiller 14
 * 
 * N의 통증 수치를 가지고 있다.
 * 아이템은 원하는대로 얻을 수 있다.
 * 단, 아이템을 사용했을 때 N이 0보다 작아질 수는 없다.
 * 
 * ex1)
 * 8
 * 2
 * 
 * ex2)
 * 100
 * 9
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N;
let cnt = 0;

rl.on('line', (line) => {
  N = line;
  rl.close();
})
rl.on('close', () => {
  const BANDAGE = 1;
  const MEDICINE = 7;
  const PAINKILLER = 14;

  while (N >= PAINKILLER) {
    N -= PAINKILLER;
    cnt++;
  }
  while (N >= MEDICINE) {
    N -= MEDICINE;
    cnt++;
  }
  while (N >= BANDAGE) {
    N -= BANDAGE;
    cnt++;
  }
  console.log(cnt);
})