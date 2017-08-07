module.exports = parser => node =>
{
	return 'catch(' + parser.parse(node.param) + '){' + parser.parse(node.body) + '}';
};