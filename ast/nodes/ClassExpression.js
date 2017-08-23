module.exports = parser => node =>
{
	const output = ['class'];
	
	if (node.id)
	{
		output.push(' ', node.id);
	}
	
	if (node.superClass)
	{
		output.push(' extends ', node.superClass);
	}
	
	output.push
	(
		parser.newLine,
		'{',
			parser.indentedNewLine,
			node.body,
			parser.outdentedNewLine,
		'}'
	);
	
	return output;
};