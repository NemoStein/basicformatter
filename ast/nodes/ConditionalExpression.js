module.exports = parser => node =>
{
	return [node.test, ' ? ', node.consequent, ' : ', node.alternate];
};