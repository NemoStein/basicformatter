module.exports = parser => node =>
{
	let output = 'class';
	
	if (node.id)
	{
		output += parser.output(' ', parser.parse(node.id));
	}
	
	if (node.superClass)
	{
		output += parser.output(' extends ', parser.parse(node.superClass));
	}
	
	output += parser.output
	(
		parser.newLine,
		'{',
			parser.indentedNewLine,
			parser.parse(node.body),
			parser.outdentedNewLine,
		'}'
	);
	
	return output;
};