module.exports = parser => node =>
{
	if (node.prefix)
	{
		return [node.operator, parser.spaceAroundUnaryOperators && ' ', node.argument];
	}
	else
	{
		return [node.argument, parser.spaceAroundUnaryOperators && ' ', node.operator];
	}
};