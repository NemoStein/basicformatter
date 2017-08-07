module.exports = parser => node =>
{
	let operator = node.operator;
	
	if (parser.options.spaceAroundBinaryOperators || node.operator === 'instanceof')
	{
		operator = ` ${node.operator} `;
	}
	
	return parser.output(parser.parse(node.left), operator, parser.parse(node.right));
};