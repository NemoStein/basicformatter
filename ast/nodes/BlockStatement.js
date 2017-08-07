module.exports = parser => node =>
{
	return node.body.map(item => parser.parse(item)).join('');
};