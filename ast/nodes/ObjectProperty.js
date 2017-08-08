module.exports = parser => node =>
{
	if (node.shorthand)
	{
		return parser.output(node.value);
	}
	
	return parser.output(node.key, ': ', node.value);
};