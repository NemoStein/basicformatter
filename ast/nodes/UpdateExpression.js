module.exports = parser => node =>
{
	let space = (parser.options.spaceAroundUnaryOperators || node.operator === 'typeof');
	
	if (node.prefix)
	{
		return parser.output(node.operator, space && ' ', parser.parse(node.argument))
	}
	else
	{
		return parser.output(parser.parse(node.argument), space && ' ', node.operator);
	}
};