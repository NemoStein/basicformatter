module.exports = parser => node =>
{
	return 'new ' + parser.parse(node.callee) + '(' + node.arguments.map(item => parser.parse(item)).join(', ') + ')';
};