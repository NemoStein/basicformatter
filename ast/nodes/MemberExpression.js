module.exports = parser => node =>
{
	if (node.computed)
	{
		return [node.object, '[', node.property, ']'];
	}
	
	return [node.object, '.', node.property];
};