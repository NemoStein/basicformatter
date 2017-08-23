module.exports = parser => node =>
{
	return [
		'{',
			parser.indentedNewLine,
			parser.join(node.body, parser.newLine),
			parser.outdentedNewLine,
		'}'
	];
};