/**
	 * Inserts comma to a string; acts as a thousands separator 
	 * @param {?string} x String to add the commas to 
 */
function comma(x) {
	if (!x) return;
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = {
	Comma: comma
}