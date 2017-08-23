module.exports = parser => node =>
{
	return [
		'switch (', node.discriminant, ')', parser.newLine,
		'{',
			...node.cases,
		'}'
	];
};