var classes = require('classes');


/**
 * Conditionally add 'hidden' class.
 * @param {HTMLElement} node 
 * @param {String} attr model's attribute
 * @api public
 */

module.exports = function(node, attr) {
	this.on('change ' + attr, function(val) {
		if(val) {
			classes(node).remove('hidden');
		} else {
			classes(node).add('hidden');
		}
	});
};
