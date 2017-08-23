module.exports = parser => node =>
{
	const output = [node.async && 'async ', node.generator && '* '];
	
	if (node.kind === 'get' || node.kind === 'set')
	{
		output.push(node.kind, ' ');
	}
	
	if (node.computed)
	{
		output.push('[', node.key, ']');	
	}
	else
	{
		output.push(node.key);
	}
	
	output.push('(', parser.join(node.params, ', '), ')', parser.newLine, node.body);
	
	return output;
};