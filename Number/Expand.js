/**
 * Removes the exponent ("E") on numbers expressed in scientific notation
 * @param {?number} Any number (if not in scientific notation, simply this value is returned)
 * @returns Returns the number, expressed in its extended form
 */
function main(x) {
	if (!x) return null;
	var data = String(x).split(/[eE]/);
	if (data.length == 1) return data[0]; 

	let z = '';
	let sign = x < 0 ? '-' : '';
	let str = data[0].replace('.', '');
	let mag = Number(data[1]) + 1;

	if (mag < 0) {
		z = sign + '0.';
		while (mag++) z += '0';
		return z + str.replace(/^\-/,'');
	}
	mag -= str.length;  
	while (mag--) z += '0';
	return str + z;
}

module.exports = {
	Expand: main
}