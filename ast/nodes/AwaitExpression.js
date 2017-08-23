module.exports = parser => node =>
{
	return ['await ', node.argument];
};