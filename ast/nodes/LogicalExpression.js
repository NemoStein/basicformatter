module.exports = parser => node =>
{
	return [node.left, parser.spaceAroundBinaryOperators && ' ', node.operator, parser.spaceAroundBinaryOperators && ' ', node.right];
};