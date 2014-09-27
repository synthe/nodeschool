var Q = require('q');

var deferred = Q.defer();

deferred.promise
.then(console.log, console.log);


setTimeout(function() {
	deferred.resolve('I FIRED');
	deferred.reject('I DID NOT FIRE');
}, 300);
