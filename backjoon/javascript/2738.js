const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let i = -1
let row
let column
let arr

function getSize(input) {
	let size = input.split(' ')
	row = Number.parseInt(size[0])
	column = Number.parseInt(size[1])
}

function initArray() {
	arr = new Array()
}

function fillArray(input) {
	let line = input.split(' ').map(num => parseInt(num))
	arr.push(line)

	if (i == 2 * row) {
		rl.close()
	}
}

rl.on('line', input => {
	i++;
	if (i == 0) {
		getSize(input)
		initArray()
	}
	else {
		fillArray(input)
	}
})

rl.on('close', () => {
	let result = []

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < column; j++) {
			result.push(arr[i][j] + arr[i + row][j])
		}
	}

	let i = 0;
	result.forEach(num => {
		i++
		process.stdout.write(num.toString())
		if (i !== row)
			process.stdout.write(' ')
		if (i === row) {
			process.stdout.write('\n')
			i = 0;
		}
	})
})