module.exports = parser => node =>
{
	if (node.computed)
	{
		return parser.parse(node.object) + '[' + parser.parse(node.property) + ']';
	}
	
	return parser.parse(node.object) + '.' + parser.parse(node.property);
};