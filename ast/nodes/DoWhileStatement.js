module.exports = parser => node =>
{
	return [
		'do', parser.newLine,
		'{',
			parser.indentedNewLine,
			node.body,
			parser.outdentedNewLine,
		'}', parser.newLine,
		'while (', node.test, ');'
	];
};