module.exports = parser => node =>
{
	let output = parser.output
	(
		'if (', node.test, ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			node.consequent,
			parser.outdentedNewLine,
		'}'
	);

	if (node.alternate)
	{
		output += parser.output
		(
			parser.newLine,
			'else', parser.newLine,
			'{',
				parser.indentedNewLine,
				node.alternate,
				parser.outdentedNewLine,
			'}'
		);
	}

	return output;
};