module.exports = parser => node =>
{
	return ['return', node.argument && ' ', node.argument, ';'];
};