module.exports = parser => node =>
{
	return [node.callee, '(', parser.join(node.arguments, ', '), ')'];
};