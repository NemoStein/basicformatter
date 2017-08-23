module.exports = parser => node =>
{
	return [node.tag, parser.spaceBetweenTagAndTemplateLiteral && ' ', node.quasi];
};