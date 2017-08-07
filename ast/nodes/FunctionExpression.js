module.exports = parser => node =>
{
	return parser.output
	(
		node.async && 'async ', 'function', node.generator && '*', node.id && ' ' + parser.parse(node.id),
		'(', node.params.map(item => parser.parse(item)).join(', '), ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			parser.parse(node.body),
			parser.outdentedNewLine,
		'}'
	);
};