module.exports = parser => node =>
{
	return parser.output
	(
		'while (', parser.parse(node.test), ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			parser.parse(node.body),
			parser.outdentedNewLine,
		'}'
	);
};