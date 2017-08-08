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
			spaceAroundUnaryOperators: false,
			spaceAroundBinaryOperators: true,
			spaceAroundAssignmentOperators: true,
			spaceBetweenTagAndTemplateLiteral: false,
			spaceBeforeComma: false,
			spaceAfterComma: true,
			
			forceInlineArrays: false,
		},
		options);
		
		this.currentIndentation = 0;
		
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
		let output = '';
		for (const part of parts)
		{
			if (part)
			{
				if (typeof part === 'function')
				{
					output += this.output(part.apply(this));
				}
				else if (typeof part === 'object' && part.type)
				{
					output += '\x1b[36m' + part.type + '(' + '\x1b[0m' + this.parse(part) + '\x1b[36m' + ')' + '\x1b[0m';
					//output += this.parse(part);
				}
				else if (typeof part === 'string')
				{
					output += part;
				}
			}
		}
		
		return output;
	}
	
	indent()
	{
		this.currentIndentation++;
	}
	
	outdent()
	{
		this.currentIndentation--;
	}
	
	indentedNewLine()
	{
		this.indent();
		return this.newLine();
	}
	
	outdentedNewLine()
	{
		this.outdent();
		return this.newLine();
	}
	
	indentation()
	{
		return '\t';
	}
	
	newLine()
	{
		let currentIndentation = '';
		for (let i = 0; i < this.currentIndentation; i++)
		{
			currentIndentation += this.indentation();
		}
		
		return '\n' + currentIndentation;
	}
}

module.exports = Parser;