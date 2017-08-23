module.exports = parser => node =>
{
	return ['{', parser.join(node.properties, ', '), '}'];
};