var Q = require('q'),
	invalidJSON = process.argv[2];

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

Q.fcall(function() {
	var obj;
	obj = JSON.parse(invalidJSON);
	return obj;
})
.then(console.log, console.log);

