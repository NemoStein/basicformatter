module.exports = parser => node =>
{
	return parser.output
	(
		node.async && 'async ', 'function', node.generator && '*', node.id && ' ', node.id,
		'(', node.params.map(item => parser.parse(item)).join(', '), ')', parser.newLine,
		node.body
	);
};