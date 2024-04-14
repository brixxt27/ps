const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.on('line', input => {
	let str = input.split('').map(x => {
		if (x == x.toUpperCase()) {
			return x.toLowerCase()
		}
		else
			return x.toUpperCase()
	}).join('')

	console.log(str)
})