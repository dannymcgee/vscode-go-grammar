import { TMGrammar } from './types';

import { comments, keywords, operators } from './repository';

const grammar: TMGrammar = {
	name: 'go',
	scopeName: 'source.go',
	patterns: [
		{ include: '#comments' },
		{ include: '#keywords' },
		{ include: '#operators' },
	],
	repository: {
		comments,
		keywords,
		operators,
	},
};

export default grammar;
