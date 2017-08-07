module.exports = parser => node =>
{
	return parser.parse(node.callee) + '(' + node.arguments.map(item => parser.parse(item)).join(', ') + ')';
};