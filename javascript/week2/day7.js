const readline = require('readline');

/**
 
4 2
0 0 0 1    0 1 2 0  이미 2를 알고 있으므로 2가 나올 때마다 개수를 센다? 재귀면 불가능
0 0 1 0    0 2 0 3
0 0 1 0    1 4 0 4
0 1 1 1    1 0 0 0

*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
const M = [];

rl.on('line', (line) => {
  if (!N) {
    const arr = line.split(' ');

    N = parseInt(arr[0]);
    K = parseInt(arr[1]);
  }
  else {
    const row = line.split(' ');

    M.push(row);
    if (M.length === N) {
      rl.close();
    }
  }
});

rl.on('close', () => {
  let cnt = 0;

  // console.log(M);

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (M[y][x] === '0' && findGoorm(M, y, x) === K) {
        cnt++;
      }
    }
  }
  console.log(cnt);
});

function findGoorm(M, y, x) {
  let cnt = 0;

  for (let yG = y - 1; yG <= y + 1; yG++) {
    for (let xG = x - 1; xG <= x + 1; xG++) {
      if ((yG >= 0 && yG < N) && (xG >= 0 && xG < N) && M[yG][xG] === '1') {
        cnt++;
      }
    }
  }
  // console.log(cnt);
  return cnt;
}
