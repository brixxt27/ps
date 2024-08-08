const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let str = new String()

rl.on('line', input => {

	switch (input[0]) {
		case 'A':
			str += '4'
			break;
		case 'B':
			str += '3'
			break;
		case 'C':
			str += '2'
			break;
		case 'D':
			str += '1'
			break;
		case 'F':
			str += '0'
			break;
	}
	switch (input[1]) {
		case '+':
			str += '.3'
			break;
		case '0':
			str += '.0'
			break;
		case '-':
			str += '.7'
			let c = --str[0]
			break;
	}
	console.log(str)
	rl.close()
})

rl.on('close', () => {
	console.log(str)
})