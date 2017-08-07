module.exports = parser => node =>
{
	return parser.parse(node.label) + ':' + parser.parse(node.body);
};