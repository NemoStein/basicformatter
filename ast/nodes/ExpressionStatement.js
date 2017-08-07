module.exports = parser => node =>
{
	return parser.parse(node.expression) + ';';
};