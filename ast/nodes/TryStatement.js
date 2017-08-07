module.exports = parser => node =>
{
	let output = 'try {' + parser.parse(node.block) + '}';
	
	if (node.handler)
	{
		output += parser.parse(node.handler);
	}
	
	if (node.finalizer)
	{
		output += 'finally {' + parser.parse(node.finalizer) + '}';
	}
	
	return output;
};