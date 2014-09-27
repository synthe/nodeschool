var Q = require('q');

var deferred = Q.defer();

deferred.promise
.then(attachTitle)
.then(console.log, console.log);

function attachTitle(name) {
	return 'DR. '+name;
}

deferred.resolve('MANHATTAN');

