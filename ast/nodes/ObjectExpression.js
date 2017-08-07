module.exports = parser => node =>
{
	let output = '';
	for (const child of node.properties)
	{
		output += parser.parse(child) + ', ';
	}
	
	return '{' + output + '}';
};