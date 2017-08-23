module.exports = parser => node =>
{
	console.log(node);
	
	const quotes = parser.useSingleQuotes ? "'" : '"';
	
	return [quotes, node.value, quotes];
};