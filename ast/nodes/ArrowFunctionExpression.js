module.exports = parser => node =>
{
	let output = '';
	
	if (node.params.length != 1)
	{
		output += '(' + node.params.map(item => parser.parse(item)).join(', ') + ')';
	}
	else
	{
		output += parser.parse(node.params[0]);
	}
	
	output += '=>{' + parser.parse(node.body) + '}';
	
	return output;
};