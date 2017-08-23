module.exports = parser => node =>
{
	return ['throw ', node.argument];
};