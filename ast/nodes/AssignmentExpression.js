module.exports = parser => node =>
{
	return parser.parse(node.left) + '=' + parser.parse(node.right);
};