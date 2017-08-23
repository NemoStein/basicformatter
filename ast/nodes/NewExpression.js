module.exports = parser => node =>
{
	return ['new ', node.callee, '(', parser.join(node.arguments, ', '), ')'];
};