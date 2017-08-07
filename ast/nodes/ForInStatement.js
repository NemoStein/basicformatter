module.exports = parser => node =>
{
	return 'for (' + parser.parse(node.left, true) + ' in ' + parser.parse(node.right) + '){' + parser.parse(node.body) + '}';
};