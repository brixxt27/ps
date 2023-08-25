const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line.split(' ').map(Number);
  rl.close();
});
rl.on('close', () => {
  const [W, R] = input;
  let RM;

  RM = W * (1 + R / 30);
  console.log(Math.trunc(RM));
})