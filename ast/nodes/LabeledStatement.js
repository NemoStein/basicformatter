module.exports = parser => node =>
{
	return [node.label, ': ', node.body];
};