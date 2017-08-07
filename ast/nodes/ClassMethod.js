module.exports = parser => node =>
{
	return parser.output
	(
		node.async && 'async ', node.generator && '* ',
		(node.kind === 'get' || node.kind === 'set') && node.kind + ' ',
		node.computed && '[', parser.parse(node.key), node.computed && ']', 
		'(', node.params.map(item => parser.parse(item)).join(', '), ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			parser.parse(node.body),
			parser.outdentedNewLine,
		'}'
	);
};