var inputs = process.argv.slice(2),
	result = Math.min(...inputs);

console.log(`The minimum of [${inputs}] is ${result}`);