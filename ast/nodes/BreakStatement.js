module.exports = parser => node =>
{
	let output = 'break';
	
	if (node.label)
	{
		output += ' ' + parser.parse(node.label);
	}
	
	output += ';';

	return output;
};