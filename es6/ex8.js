console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(template, ...args) {
	var result = template[0];
	args.forEach(function(item, key) {
		result += escape(item) + template[key+1];
	});
	return result;
}

function escape(str) {
	return str.replace(/&/g, '&amp;')
				.replace(/'/g, '&#39;')
				.replace(/"/g, '&quot;')
				.replace(/>/g, '&gt;')
				.replace(/</g, '&lt');
}