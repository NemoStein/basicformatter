module.exports = parser => node =>
{
	const quotes = parser.useSingleQuotes ? "'" : '"';
	
	return [quotes, node.extra.raw.slice(1, -1), quotes];
};