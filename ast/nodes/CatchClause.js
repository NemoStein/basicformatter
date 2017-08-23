module.exports = parser => node =>
{
	return [
		'catch (', node.param, ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			node.body,
			parser.outdentedNewLine,
		'}'
	];
};