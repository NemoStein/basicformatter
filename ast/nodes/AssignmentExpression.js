module.exports = parser => node =>
{
	return [node.left, parser.spaceAroundAssignmentOperators && ' ', node.operator, parser.spaceAroundAssignmentOperators && ' ', node.right];
};