module.exports = parser => node =>
{
	return parser.join(node.body, [parser.newLine, parser.newLine]);
};