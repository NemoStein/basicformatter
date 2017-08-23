module.exports = parser => node =>
{
	const spaceBefore = parser.spaceBeforeComma ? ' ' : '';
	const spaceAfter = parser.spaceAfterComma ? ' ' : '';
	
	let inline = parser.objectStyle === 'inline';
	if (!inline)
	{
		const size = parseInt(parser.objectStyle);
		if (!isNaN(size) && node.properties.length <= size)
		{
			inline = true;
		}
		else if (parser.objectStyle === 'keep' && node.loc.start.line === node.loc.end.line)
		{
			inline = true;
		}
	}
	
	if (inline)
	{
		return ['{', parser.join(node.properties, [spaceBefore, ',', spaceAfter]), '}'];
	}
	
	return [parser.newLine,
		'{',
			parser.indentedNewLine,
			parser.join(node.properties, [spaceBefore, ',', parser.newLine]), spaceBefore, ',',
			parser.outdentedNewLine,
		'}'
	];
};