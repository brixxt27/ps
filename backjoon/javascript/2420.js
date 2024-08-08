const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let sum = 0

rl.on('line', (input) => {
	let arr = input.split(' ')
	let num1 = arr[0]
	let num2 = arr[1]
	sum = num1 - num2
	rl.close()
})

rl.on('close', () => {
	if (sum < 0)
		sum = sum * -1
	console.log(sum)
})
