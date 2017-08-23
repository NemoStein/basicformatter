module.exports = parser => node =>
{
	if (node.prefix)
	{
		return [node.operator, parser.options.spaceAroundUnaryOperators && ' ', node.argument];
	}
	else
	{
		return [node.argument, parser.options.spaceAroundUnaryOperators && ' ', node.operator];
	}
};