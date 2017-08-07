module.exports = parser => node =>
{
	return 'while(' + parser.parse(node.test) + '){' + parser.parse(node.body) + '}';
};