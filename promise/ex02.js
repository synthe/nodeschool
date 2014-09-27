var Q = require('q');

var deferred = Q.defer();

deferred.promise
.then(console.log)
.catch(function(err) {
	console.log(err.message)
});
setTimeout(function() {
	deferred.reject(new Error('REJECTED!'));
}, 300);
