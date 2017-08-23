module.exports = parser => node =>
{
	let output = ['if (', node.test, ')', parser.newLine, node.consequent];

	if (node.alternate)
	{
		output.push
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