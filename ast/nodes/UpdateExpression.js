module.exports = parser => node =>
{
	let output = parser.parse(node.argument);
	
	if (node.prefix)
	{
		output = node.operator + output;
	}
	else
	{
		output += node.operator;
	}
	
	return output;
};