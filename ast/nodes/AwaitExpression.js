module.exports = parser => node =>
{
	return parser.output('await ', parser.parse(node.argument));
};