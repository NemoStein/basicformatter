module.exports = parser => (node, open) =>
{
	let output = '';
	for (const child of node.declarations)
	{
		let declaration = node.kind + ' ' + parser.parse(child.id);
		
		if (child.init)
		{
			declaration += ' = ' + parser.parse(child.init);
		}
		
		output += declaration;
		
		if (!open)
		{
			output += ';';
		}
	}
	
	return output;
};