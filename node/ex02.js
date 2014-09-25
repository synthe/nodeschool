var args = process.argv.slice(2),
	total = 0;
args.forEach(function(val, key, arr) {
	total += Number(val);
});

console.log(total);