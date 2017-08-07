module.exports = parser => node =>
{
	let output = parser.output
	(
		'if (', parser.parse(node.test), ')', parser.newLine,
		'{',
			parser.indentedNewLine,
			parser.parse(node.consequent),
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
				parser.parse(node.alternate),
				parser.outdentedNewLine,
			'}'
		);
	}

	return output;
};