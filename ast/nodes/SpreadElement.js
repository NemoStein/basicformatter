module.exports = parser => node =>
{
	return parser.output('...', parser.parse(node.argument));
};