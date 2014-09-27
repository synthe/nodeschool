var QHTTP = require('q-io/http');

QHTTP.read('http://localhost:7000')
.then(function(result) {
	var obj = result.toString();
	return 'http://localhost:7001/'+obj;
})
.then(QHTTP.read)
.then(function(result) {
	console.log(JSON.parse(result.toString()));
})
.catch(function(err) {
	console.error(err);
});