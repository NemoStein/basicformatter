module.exports = parser => node =>
{
	return [node.expression, ';', parser.newLine];
};