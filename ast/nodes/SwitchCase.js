module.exports = parser => node =>
{
	let output = '';
	
	if (node.test)
	{
		output += 'case ' + parser.parse(node.test) + ':';
	}
	else
	{
		output += 'default:';
	}
	
	output += '{' + node.consequent.map(item => parser.parse(item)).join('') + '}';
	
	return output;
};