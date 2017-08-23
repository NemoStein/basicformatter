module.exports = parser => node =>
{
	return [node.tag, parser.options.spaceBetweenTagAndTemplateLiteral && ' ', node.quasi];
};