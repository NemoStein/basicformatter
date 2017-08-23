const fs = require('fs');
const path = require('path');
const docopt = require('docopt').docopt;

const Parser = require('./ast/parser');

const doc =
`
Usage:
	index [options]

Options:
	-h --help     Show this.
	-v --version  Print current version.
	-d --debug    Output in debug mode
`;

const options = docopt(doc, {version: '0.1.0'});

fs.readFile(path.join(__dirname, 'sample.js'), (error, file) =>
{
	const parser = new Parser({}, options['--debug']);
	const code = parser.format(file.toString());
	
	//console.log(JSON.stringify(parser.ast.program.body, null, '\t'));
	console.log(code);
});