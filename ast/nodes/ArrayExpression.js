module.exports = parser => node =>
{
	const spaceBefore = parser.options.spaceBeforeComma ? ' ' : '';
	const spaceAfter = parser.options.spaceAfterComma ? ' ' : '';
	const inline = parser.options.forceInlineArrays;
	
	return parser.output
	(
		!inline && parser.newLine,
		'[',
			!inline && parser.indentedNewLine,
			() =>
			{
				if (parser.options.forceInlineArrays)
				{
					return node.elements.map(item => parser.parse(item)).join(spaceBefore + ',' + spaceAfter);
				}
				
				const parts = [];
				for (const element of node.elements)
				{
					parts.push(element, spaceBefore, ',', parser.newLine);
				}
				parts.pop();
				
				return parser.output(...parts);
			},
			!inline && parser.outdentedNewLine,
		']'
	);
};