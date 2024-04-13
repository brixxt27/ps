const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let arr = new Array(30)
let i = 0

rl.on('line', input => {
	let num = Number.parseInt(input) - 1
	arr[num] = true;
	i++;
	if (i == 28) {
		rl.close()
	}
})

rl.on('close', () => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != true)
			console.log(i + 1)
	}
})