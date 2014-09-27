var Q = require('q');

var deferred = Q.defer();

deferred.promise
.then(console.log, console.log);


deferred.resolve('SECOND');
console.log('FIRST');
