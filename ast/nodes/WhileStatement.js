module.exports = parser => node =>
{
	return parser.output
	(
		'while (', node.test, ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			node.body,
			parser.outdentedNewLine,
		'}'
	);
};