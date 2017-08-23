const fs = require('fs');
const path = require('path');
const docopt = require('docopt').docopt;

const Parser = require('./ast/parser');

const doc =
`
Usage:
	index [options] [--] [<file>]
	index -h | --help
	index -v | --version

Options:
	-a --array-style=<style>   Array style (inline | expand | keep | int) [default: keep]
	-o --object-style=<style>  Object style (inline | expand | keep | int) [default: 1]
	-d --debug    Output in debug mode
	-h --help     Show this
	-v --version  Print current version
`;

const args = docopt(doc, {version: '0.1.0'});
const options = {};

options.arrayStyle = args['--array-style'];
options.objectStyle = args['--object-style'];

fs.readFile(path.join(__dirname, 'sample.js'), (error, file) =>
{
	const parser = new Parser(options, args['--debug']);
	const code = parser.format(file.toString());
	
	//console.log(JSON.stringify(parser.ast.program.body, null, '\t'));
	console.log(code);
});