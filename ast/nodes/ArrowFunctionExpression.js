module.exports = parser => node =>
{
	const output = [];
	
	if (node.params.length === 1)
	{
		output.push(node.params[0]);
	}
	else
	{
		output.push('(', parser.join(node.params, ', '), ')');
	}
	
	output.push(' => ', node.body);
	
	return output;
};