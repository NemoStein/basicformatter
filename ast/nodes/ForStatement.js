module.exports = parser => node =>
{
	return 'for(' + parser.parse(node.init, true) + ';' + parser.parse(node.test) + ';' + parser.parse(node.update) + '){' + parser.parse(node.body) + '}';
};