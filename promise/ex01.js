var Q = require('q');

var deferred = Q.defer();

deferred.promise.then(console.log);
setTimeout(function() {
	deferred.resolve('RESOLVED!');
}, 300);
