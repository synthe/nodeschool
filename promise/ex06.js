var Q = require('q'),
	invalidJSON = process.argv[2];

var deferred = Q.defer();

function parsePromised() {
	var deferred = Q.defer(),
		obj;
	try {
		obj = JSON.parse(invalidJSON);
		deferred.resolve(obj);
	} catch(err) {
		deferred.reject(err)
	}

	return deferred.promise;
}


parsePromised()
.then(console.log, console.log);

