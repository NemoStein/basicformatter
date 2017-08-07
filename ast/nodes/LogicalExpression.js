module.exports = parser => node =>
{
	return parser.parse(node.left) + ' ' + node.operator + ' ' + parser.parse(node.right);
};