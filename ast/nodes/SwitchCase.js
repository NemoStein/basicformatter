module.exports = parser => node =>
{
	const output = [];
	
	if (node.test)
	{
		output.push('case ', node.test, ':');
	}
	else
	{
		output.push('default:');
	}
	
	output.push
	(
		parser.newLine,
		'{',
			...node.consequent,
		'}'
	);
	
	return output;
};