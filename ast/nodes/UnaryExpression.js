module.exports = parser => node =>
{	
	const space = (parser.options.spaceAroundUnaryOperators || node.operator === 'typeof');
	
	return [node.operator, space && ' ', node.argument];
};