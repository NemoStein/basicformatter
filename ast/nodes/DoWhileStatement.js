module.exports = parser => node =>
{
	return 'do{' + parser.parse(node.body) + '}while(' + parser.parse(node.test) + ');';
};