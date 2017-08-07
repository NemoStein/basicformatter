module.exports = parser => node =>
{
	return 'switch(' + parser.parse(node.discriminant) + '){' + node.cases.map(item => parser.parse(item)).join('') + '}';
};