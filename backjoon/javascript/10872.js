const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let sum = 1

rl.on('line', input => {
	let cnt = Number(input)

	for (let i = 1; i <= cnt; i++) {
		sum *= i
	}
	rl.close()
})

rl.on('close', () => {
	console.log(sum)
})