const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr;

rl.on("line", (input) => {
  arr = input.split(" ");
  rl.close();
});

rl.on("close", () => {
  let A = parseInt(arr[0]);
  let B = parseInt(arr[1]);
  let ret = (A + B) * (A - B);
  console.log(ret);
});
