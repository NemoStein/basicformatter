module.exports = parser => node =>
{
	return 'throw ' + parser.parse(node.argument);
};