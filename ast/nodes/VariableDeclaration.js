module.exports = parser => (node, open) =>
{
	const spaceAssigment = parser.options.spaceAroundAssignmentOperators && ' ';
	
	let parts = [];
	for (const child of node.declarations)
	{
		parts.push(node.kind, ' ', child.id);
		
		if (child.init)
		{
			parts.push(spaceAssigment, '=', spaceAssigment, child.init);
		}
		
		if (!open)
		{
			parts.push(';', parser.newLine);
		}
	}
	
	return parser.output(...parts);
};