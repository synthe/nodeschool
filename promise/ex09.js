var Q = require('q');

var deferOne = Q.defer(),
	deferTwo = Q.defer();

function all(promiseOne, promiseTwo) {
	var thisDefer = Q.defer(),
		result = [];

	promiseOne.then(function(item) {
		result[0] = item;
		if (result.length == 2) {
			thisDefer.resolve(result);
		}
	}).catch(function() {  })

	promiseTwo.then(function(item) {
		result[1] = item;
		if (result.length == 2) {
			thisDefer.resolve(result);
		}
	}).catch(function() {  })

	return thisDefer.promise;
}

all(deferOne.promise, deferTwo.promise)
.then(console.log)
.catch(console.err);

setTimeout(function() {
	deferOne.resolve('PROMISES');
	deferTwo.resolve('FTW');
}, 200);