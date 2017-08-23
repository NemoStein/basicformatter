module.exports = parser => node =>
{
	return [node.expression, ';'];
};