module.exports = parser => node =>
{
	const output = ['`'];
	
	for (let i = 0; i < node.quasis.length; i++)
	{
		const element = node.quasis[i];
		
		output.push(element.value.raw);
		
		if (element.tail)
		{
			break;
		}
		
		output.push('${', node.expressions[i], '}');
	}
	
	output.push('`');
	
	return output;
};