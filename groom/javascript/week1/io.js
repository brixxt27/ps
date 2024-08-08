const readline = require('readline');

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (line) => {
	input = line;
	rl.close();
});

rl.on('close', () => {
	console.log("Hello Goorm! Your input is " + input);
})