module.exports = parser => node =>
{	
	let operator = node.operator;
	
	if (parser.options.spaceAroundUnaryOperators || node.operator === 'typeof')
	{
		operator = `${node.operator} `;
	}
	
	return parser.output(operator, parser.parse(node.argument));
};