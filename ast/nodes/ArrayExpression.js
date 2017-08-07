module.exports = parser => node =>
{
	let output = '';
	
	output += node.elements.map(item => parser.parse(item)).join(',' + parser.indentedNewLine);
	
	return parser.output(parser.newLine, '[', parser.indentedNewLine, output, parser.newLine, ']');
};