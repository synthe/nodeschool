var koa = require('koa'),
	app = koa(),
	port = process.argv[2] || 8080;

app.use(function *() {
	this.body = 'hello';
});


app.listen(port);