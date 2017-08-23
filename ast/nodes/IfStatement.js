module.exports = parser => node =>
{
	let output = ['if', parser.spaceAfterControl && ' ', '(', node.test, ')', parser.newLine, node.consequent];

	if (node.alternate)
	{
		output.push(parser.newLine, 'else');	
		
		if (node.alternate.type === 'IfStatement')
		{
			output.push(' ', node.alternate);
		}
		else
		{
			output.push
			(
				parser.newLine,
				'{',
					parser.indentedNewLine,
					node.alternate,
					parser.outdentedNewLine,
				'}'
			);
		}
	}

	return output;
};