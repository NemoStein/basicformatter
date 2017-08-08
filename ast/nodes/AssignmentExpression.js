module.exports = parser => node =>
{
	const spaceAssigment = parser.options.spaceAroundAssignmentOperators && ' ';
	
	return parser.output(node.left, spaceAssigment, node.operator, spaceAssigment, node.right, ';', parser.newLine);
};