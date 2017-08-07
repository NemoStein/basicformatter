module.exports = parser => node =>
{
	return parser.output('return', node.argument && ' ' + parser.parse(node.argument), ';');
};