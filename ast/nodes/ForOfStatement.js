module.exports = parser => node =>
{
	return 'for (' + parser.parse(node.left, true) + ' of ' + parser.parse(node.right) + '){' + parser.parse(node.body) + '}';
};