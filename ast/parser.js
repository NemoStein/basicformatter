const fs = require('fs');
const path = require('path');
const babylon = require('babylon');

const nodes = {};
const Parser = class
{
	constructor(options, debug)
	{
		this.debug = debug;
		
		this.nodes = {};
		this.options = Object.assign(
		{
			spaceAroundUnaryOperators: false,
			spaceAroundBinaryOperators: true,
			spaceAroundAssignmentOperators: true,
			spaceBetweenTagAndTemplateLiteral: false,
			spaceBeforeComma: false,
			spaceAfterComma: true,
			arrayStyle: 'keep', // 'inline' | 'expand' | 'keep' | int
			objectStyle: 1, // 'inline' | 'expand' | 'keep' | int
			useSingleQuotes: true,
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
				else if (property in target.options)
				{
					return target.options[property];
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
			
			return this.output(typeParser(node, ...params));
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
				else if (Array.isArray(part))
				{
					for (const i of part)
					{
						output += this.output(i);
					}
				}
				else if (typeof part === 'object' && part.type)
				{
					if (this.debug)
					{
						output += '\x1b[36m' + part.type + '(' + '\x1b[0m' + this.parse(part) + '\x1b[36m' + ')' + '\x1b[0m';
					}
					else
					{
						output += this.parse(part);
					}
				}
				else if (typeof part === 'string')
				{
					if (this.debug)
					{
						output += '\x1b[35m' + part + '\x1b[0m';
					}
					else
					{
						output += part;
					}
				}
			}
		}
		
		return output;
	}
	
	join(elements, glue)
	{
		const output = [];
		
		for (const element of elements)
		{
			output.push(element, glue);
		}
		
		output.pop();
		
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