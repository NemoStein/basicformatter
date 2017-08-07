const fs = require('fs');
const path = require('path');
const babylon = require('babylon');

const nodes = {};
const Parser = class
{
	constructor(options)
	{
		this.nodes = {};
		this.options = Object.assign(
		{
			
		},
		options);
		
		const proxy = new Proxy(this,
		{
			get (target, property)
			{
				if (property in target)
				{
					return target[property];
				}
				
				return '';
			}
		});
		
		for (const filename of fs.readdirSync(path.join(__dirname, 'nodes')))
		{
			this.nodes[filename.split('.')[0]] = require(path.join(__dirname, 'nodes', filename))(proxy);
		}
	}
	
	format(source)
	{
		this.source = source;
		this.ast = babylon.parse(source,
		{
			allowImportExportEverywhere: true,
			allowReturnOutsideFunction: true,
			ranges: true,
			tokens: false,
		});
		
		return this.parse(this.ast.program);
	}
	
	parse(node, ...params)
	{
		if (node)
		{
			const typeParser = this.nodes[node.type];
			if (!typeParser)
			{
				console.log(`Node ${node.type} not implemented. Source at ${node.loc.start.line}:${node.loc.start.column}`);
				return this.getSource(node);
			}
			
			return typeParser(node, ...params);
		}
		
		return '';
	}
	
	getSource(node)
	{
		return this.source.substring(node.start, node.end);
	}
	
	output(...parts)
	{
		return parts.join('');
	}
	
	get indentation()
	{
		return '\t';
	}
	
	get newLine()
	{
		return '\n' + this.indentation;
	}
	
	get indentedNewLine()
	{
		return this.newLine + '\t';
	}
}

module.exports = Parser;