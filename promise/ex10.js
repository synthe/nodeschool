var QHTTP = require('q-io/http');

QHTTP.read('http://localhost:1337')
.then(function(result) {
	console.log(JSON.parse(result))
})
.catch(function(err) {
	console.error(err.message);
});
