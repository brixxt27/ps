const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let i = 0;
let arr;
let target;

rl.on('line', input => {
	switch (i) {
		case 0:
			cnt = input
			break
		case 1:
			arr = input.split(' ')
			break
		case 2:
			target = input
			rl.close()
	}
	i++
})

rl.on('close', () => {
	let cnt = 0;

	arr.forEach(num => {
		if (target == num) {
			cnt++;
		}
	})
	console.log(cnt)
})