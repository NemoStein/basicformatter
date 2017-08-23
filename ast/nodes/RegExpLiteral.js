module.exports = parser => node =>
{
	return ['/', node.pattern, '/', node.flags];
};