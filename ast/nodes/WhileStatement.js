module.exports = parser => node =>
{
	return [
		'while (', node.test, ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			node.body,
			parser.outdentedNewLine,
		'}'
	];
};