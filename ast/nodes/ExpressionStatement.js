module.exports = parser => node =>
{
	return parser.output(node.expression);
};