module.exports = parser => node =>
{
	return 'with(' + parser.parse(node.object) + '){' + parser.parse(node.body) + '}';
};