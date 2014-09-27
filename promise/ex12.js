var QHTTP = require('q-io/http'),
	_ = require('lodash'),
	cachePath = 'http://localhost:7000/',
	dbPath = 'http://localhost:7001/';

var buildDbPath = _.bind(String.prototype.concat, dbPath);

QHTTP.read(cachePath)
.then(_.compose(QHTTP.read, buildDbPath))
.then(_.compose(console.log, JSON.parse))
.catch(console.error)
.done();

