var inputs = process.argv.slice(2);
var result = inputs.map(word => word.charAt(0))
				.reduce((last, now) => last + now);

console.log(`[${inputs.join(',')}] becomes "${result}"`);