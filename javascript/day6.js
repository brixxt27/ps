/*
3
abc
a b c 1 2 3, 6
*******************

4
abcd
a b cd, 1 3 6, 10
a bc d, 1 4 7, 12
ab c d, 2 5 7, 14

a ab b bc c cd d
1 2  3 4  5 6  7

********************

4
aaaa
a a aa
a aa a
aa a a 2 1 1, 4

a aa

********************

5
abcde
a b cde 1 4 9, 14
a bc de 1 5 11, 17
a bcd e 1 6 12, 19
ab c de 2 7 11, 20
ab cd e 2 8 12, 22
abc d e 3 10 12, 25

a ab abc b bc bcd c cd cde d de e
1 2  3   4 5  6   7 8  9   10 11 12
*/


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
  let b;
  let c = 2;

  for (b = 1; b < c; b++) {
    for (c = b + 1; c < N; c++) {
      total.push([s.slice(a, b), s.slice(b, c), s.slice(c, N)]);
    }
  }

  for (const arr1 of total) {
    arr1.forEach((arr2) => {
      if (notDup.indexOf(arr2) == -1) {
        notDup.push(arr2);
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