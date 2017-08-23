module.exports = parser => node =>
{
	const output = ['break'];
	
	if (node.label)
	{
		output.push(' ', node.label);
	}
	
	return output;
};