var combine = require('stream-combiner'),
	split = require('split'),
	zlib = require('zlib'),
	through = require('through');


function convertToObject(text) {
	if (text.length > 0) {
		this.queue(JSON.parse(text))
	};
}
function bookGenreSorter(obj) {
	var bgs = bookGenreSorter;
	if (obj.type === 'genre') {
		var lastGenre = bgs.genres[bgs.currentGenre] || null;
		// console.log(lastGenre);
		bgs.currentGenre = obj.name;
		bgs.genres[obj.name] = {
			name: obj.name,
			books: []
		};
		if (lastGenre) {
			this.queue(lastGenre);
		}
	} else if (obj.type === 'book') {
		bgs.genres[bgs.currentGenre].books.push(obj.name);
	}
}
bookGenreSorter.genres = {};

function genreOutput(genreObj) {
	if (genreObj) {
		this.queue(JSON.stringify(genreObj));
		this.queue('\n');
	}
}


module.exports = function() {
	return combine(
		split(),
		through(convertToObject, function() {
			this.queue({type: 'genre', name: null});
		}),
		through(bookGenreSorter),
		through(genreOutput),
		zlib.createGzip()

	);
};