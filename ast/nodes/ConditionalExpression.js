module.exports = parser => node =>
{
	let output = 'if(' + parser.parse(node.test) + '){' + parser.parse(node.consequent) + '}';

	if (node.alternate)
	{
		output += 'else{' + parser.parse(node.alternate) + '}';
	}

	return parser.parse(node.test) + '?' + parser.parse(node.consequent) + ':' + parser.parse(node.alternate);
};