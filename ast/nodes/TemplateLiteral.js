module.exports = parser => node =>
{
	let output = [];
	
	//expressions
	
	for (let i = 0; i < node.quasis.length; i++)
	{
		const quasi = node.quasis[i];
		
		output.push(quasi.value.raw);
		
		if (quasi.tail)
		{
			break;
		}
		
		output.push('${', parser.parse(node.expressions[i]), '}');
	}
	
	return parser.output('`', ...output, '`');
};