module.exports = parser => node =>
{
	return ['for (', parser.parse(node.left, true), ' in ', node.right, ')', parser.newLine, node.body];
};