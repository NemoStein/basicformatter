module.exports = parser => node =>
{
	if (node.shorthand)
	{
		return parser.parse(node.value);
	}
	
	return parser.parse(node.key) + ': ' + parser.parse(node.value);
};