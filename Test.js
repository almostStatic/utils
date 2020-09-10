const expand = require('./Number/Expand.js').Expand;
const comma = require('./String/Comma.js').Comma;

module.exports = function () {
	console.log(expand(1.3847e+343))
	console.log(comma(10000000))
}