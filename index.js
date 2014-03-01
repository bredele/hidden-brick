var classes = require('classes');


function toggle(node, val) {
	if(val) {
		classes(node).remove('hidden');
	} else {
		classes(node).add('hidden');
	}
}

/**
 * Conditionally add 'hidden' class.
 * @param {HTMLElement} node 
 * @param {String} attr model's attribute
 * @api public
 */

module.exports = function(node, attr) {
	var bool = (attr[0] === '!');
	if(bool) attr = attr.substring(1);
	this.on('change ' + attr, function(val) {
		toggle(node, bool ? !val : val);
	});
};
