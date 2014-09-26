var duplexer = require('duplexer'),
	through = require('through');

module.exports = function(counter) {
	var countries = {};

	function consumeObject(buffer) {
		var country = buffer.country,
			currentCount = countries[country] || 0;

		countries[country] = currentCount + 1;
	}
	function endConsume() {
		counter.setCounts(countries);
	}

	return duplexer( 
		process.stdin.pipe(through(consumeObject, endConsume) ), counter);
};