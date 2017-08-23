module.exports = parser => node =>
{
	const output =
	[
		'try', parser.newLine,
		'{',
			parser.indentedNewLine,
			node.block,
			parser.outdentedNewLine,
		'}'
	];
	
	if (node.handler)
	{
		output.push(node.handler);
	}
	
	if (node.finalizer)
	{
		output.push
		(
			'finally', parser.newLine,
			'{',
				parser.indentedNewLine,
				node.finalizer,
				parser.outdentedNewLine,
			'}'
		);
	}
	
	return output;
};