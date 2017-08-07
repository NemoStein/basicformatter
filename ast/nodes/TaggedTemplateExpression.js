module.exports = parser => node =>
{
	return parser.output(parser.parse(node.tag), parser.options.spaceBetweenTagAndTemplateLiteral && ' ', parser.parse(node.quasi));
};