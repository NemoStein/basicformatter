module.exports = parser => node =>
{
	return ['for (', parser.parse(node.left, true), ' of ', node.right, ')', parser.newLine, node.body];
};