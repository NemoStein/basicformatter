module.exports = parser => node =>
{
	const spaceBefore = parser.spaceBeforeComma ? ' ' : '';
	const spaceAfter = parser.spaceAfterComma ? ' ' : '';
	
	let inline = parser.arrayStyle === 'inline';
	if (!inline)
	{
		const size = parseInt(parser.arrayStyle);
		if (!isNaN(size) && node.elements.length <= size)
		{
			inline = true;
		}
		else if(parser.arrayStyle === 'keep' && node.loc.start.line === node.loc.end.line)
		{
			inline = true;
		}
	}
	
	if (inline)
	{
		return ['[', parser.join(node.elements, [spaceBefore, ',', spaceAfter]), ']'];
	}
	
	return [parser.newLine,
		'[',
			parser.indentedNewLine,
			parser.join(node.elements, [spaceBefore, ',', parser.newLine]), spaceBefore, ',',
			parser.outdentedNewLine,
		']'
	];
};