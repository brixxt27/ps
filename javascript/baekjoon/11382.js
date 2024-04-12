const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0
let i = 0

rl.on('line', (input) => {
	let arr = input.split(' ')
	rl.close()
})

rl.on('close', () => {
	arr.forEach(num => {
		sum += Number(num)
	})
	console.log(sum)
})

