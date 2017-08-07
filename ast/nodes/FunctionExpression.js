module.exports = parser => node =>
{
	let output = 'function';
	if (node.id)
	{
		output += ' ' + parser.parse(node.id);
	}

	output += '(' + node.params.map(item => parser.parse(item)).join(', ') + '){' + parser.parse(node.body) + '}';
	
	return output;
};