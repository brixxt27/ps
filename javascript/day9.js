/**
4 4
0 0 @ 0
0 0 0 0
0 # 0 0
0 0 0 @
2 2
2 3
1 4
1 4
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
let ground = [];
let location = [];
let max = 0;

rl.on('line', (line) => {
  if (!N) {
    [N, K] = line.split(' ').map(Number);
  }
  else if (ground.length < N) {
    let arr = line.split(' ').map((value) => {
      return [value, 0];
    })
    ground.push(arr);
  }
  else if (location.length < K) {
    location.push(line.split(' ').map(Number));
    if (location.length >= K)
      rl.close();
  }
})

function boomer(y, x) {
  if ((y < 1 || y > N) || (x < 1 || x > N))
    return;
  let arr = ground[y - 1][x - 1];

  switch (arr[0]) {
    case '0':
      arr[1]++;
      break;
    case '@':
      arr[1] = arr[1] + 2;
      break;
  }
  return arr[1];
}

function controller(y, x) {
  let spot = [];
  let max = 0;
  let cnt;

  spot.push([y - 1, x]);
  spot.push([y, x - 1]);
  spot.push([y, x]);
  spot.push([y + 1, x]);
  spot.push([y, x + 1]);

  spot.forEach((arr) => {
    let [y, x] = arr;

    cnt = boomer(y, x);
    if (cnt > max)
      max = cnt;
  });
  return max;
}

// N K goorm location
rl.on('close', () => {
  let max = 0;

  location.forEach((val) => {
    let [y, x] = val;
    let cnt;

    cnt = controller(y, x);
    if (cnt > max)
      max = cnt;
  })
  console.log(max);
})