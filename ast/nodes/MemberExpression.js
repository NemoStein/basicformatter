module.exports = parser => node =>
{
	if (node.computed)
	{
		return parser.output(node.object, '[', node.property, ']');
	}
	
	return parser.output(node.object, '.', node.property);
};