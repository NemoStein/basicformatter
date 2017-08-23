module.exports = parser => node =>
{
	const space = parser.options.spaceAroundBinaryOperators || node.operator === 'instanceof';
	
	return [node.left, space && ' ', node.operator, space && ' ', node.right];

};