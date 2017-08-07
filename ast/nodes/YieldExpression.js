module.exports = parser => node =>
{
	return parser.output('yield', node.delegate && '*', ' ', parser.parse(node.argument));
};