module.exports = parser => node =>
{
	let output = '';
	
	if (node.kind === 'method')
	{
		output += parser.parse(node.key);
	}
	else
	{
		output += node.kind;
	}
	
	output += '(' + node.params.map(item => parser.parse(item)).join(', ') + '){' + parser.parse(node.body) + '}';
	
	return output;
};