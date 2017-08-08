module.exports = parser => node =>
{
	return parser.output
	(
		'{',
			parser.indentedNewLine,
			...node.body,
			parser.outdentedNewLine,
		'}'
	);
};