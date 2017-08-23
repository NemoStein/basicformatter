module.exports = parser => node =>
{	
	const space = (parser.spaceAroundUnaryOperators || node.operator === 'typeof');
	
	return [node.operator, space && ' ', node.argument];
};