module.exports = parser => node =>
{
	let content = '';
	for (const child of node.body)
	{
		content += parser.parse(child);
	}
	
	return content;
};