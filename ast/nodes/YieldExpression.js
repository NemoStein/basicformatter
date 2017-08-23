module.exports = parser => node =>
{
	return ['yield', node.delegate && '*', ' ', node.argument];
};