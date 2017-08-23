module.exports = parser => node =>
{
	return [(node.kind === 'method' ? node.key : node.kind), ' (', parser.join(node.params, ', '), ')', parser.newLine, node.body];
};