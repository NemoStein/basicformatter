module.exports = parser => node =>
{
	const spaceBefore = parser.spaceBeforeComma ? ' ' : '';
	const spaceAfter = parser.spaceAfterComma ? ' ' : '';
	const inline = parser.forceInlineArrays;
	
	return [
		!inline && parser.newLine,
		'[',
			!inline && parser.indentedNewLine,
			() =>
			{
				if (parser.forceInlineArrays)
				{
					return parser.join(node.elements, [spaceBefore, ',', spaceAfter]);
				}
				
				const parts = [];
				for (const element of node.elements)
				{
					parts.push(element, spaceBefore, ',', parser.newLine);
				}
				parts.pop();
				
				return parts;
			},
			!inline && parser.outdentedNewLine,
		']'
	];
};