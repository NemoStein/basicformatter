module.exports = parser => node =>
{
	return [
		'{',
			parser.indentedNewLine,
			...node.body,
			parser.outdentedNewLine,
		'}'
	];
};