module.exports = parser => node =>
{
	if (node.shorthand)
	{
		return node.value;
	}
	
	return [node.key, ': ', node.value];
};