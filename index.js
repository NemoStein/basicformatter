const fs = require('fs');
const path = require('path');

const Parser = require('./ast/parser');

fs.readFile(path.join(__dirname, 'sample.js'), (error, file) =>
{
	const parser = new Parser();
	const code = parser.format(file.toString());
	
	//console.log(JSON.stringify(parser.ast, null, '\t'));
	console.log(code);
});