module.exports = parser => node =>
{
	return node.expressions.map(item => parser.parse(item)).join(',');
};