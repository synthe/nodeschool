module.exports = function average(...nums) {
	var result = 0;
	nums.forEach(function(val) { result += val; });
	return result / nums.length;
};