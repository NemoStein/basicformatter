module.exports = parser => node =>
{
	return ['for (', parser.parse(node.init, true), ';', node.test, ';', node.update, ')', parser.newLine, node.body];
};