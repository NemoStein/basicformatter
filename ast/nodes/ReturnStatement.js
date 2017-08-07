module.exports = parser => node =>
{
	return 'return ' + parser.parse(node.argument) + ';';
};