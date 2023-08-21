const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let s;

rl.on('line', (line) => {
  if (!N) {
    N = parseInt(line);
  } else {
    s = line;
    rl.close();
  }
});

rl.on('close', () => {
  let total = []; // 3 개씩 배열
  let notDup = []; // 1차원
  let a = 0;
  let b = 1;
  let c = 2;

  for (; b < c; b++) {
    c = b + 1;
    for (; c < N; c++) {
      total.push([s.slice(a, b), s.slice(b, c), s.slice(c, N)]);
    }
  }
  // console.log(total);

  for (const value of total) {
    value.forEach((val) => {
      if (notDup.indexOf(val) == -1) {
        notDup.push(val);
      }
    })
  }

  notDup.sort(); // 배열이라 직접 정렬해줘야 함. map 써보기

  let sum = 0;
  let ret = 0;
  
  total.forEach((arr1) => {
    for (const arr2 of arr1) {
      sum += (notDup.indexOf(arr2) + 1);
    }
    if (ret < sum)
      ret = sum;
    sum = 0;
  })
  console.log(ret);
})