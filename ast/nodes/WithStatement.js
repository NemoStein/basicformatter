module.exports = parser => node =>
{
	return [
		'with(', node.object, ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			node.body,
			parser.outdentedNewLine,
		'}'
	];
};