module.exports = parser => node =>
{
	return [
		node.async && 'async ', 'function', node.generator && '*', node.id && ' ' + node.id,
		'(', parser.join(node.params, ', '), ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			node.body,
			parser.outdentedNewLine,
		'}'
	];
};