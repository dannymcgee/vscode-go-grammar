import { TMGrammar } from './types';

import {
	comments,
	funcDeclaration,
	identifiers,
	keywords,
	literals,
	operators,
	parameters,
	typedef,
} from './repository';

const grammar: TMGrammar = {
	name: 'go',
	scopeName: 'source.go',
	patterns: [
		{ include: '#comments' },
		{ include: '#funcDeclaration' },
		{ include: '#keywords' },
		{ include: '#operators' },
		{ include: '#identifiers' },
		{ include: '#literals' },
	],
	repository: {
		comments,
		funcDeclaration,
		identifiers,
		keywords,
		literals,
		operators,
		parameters,
		typedef,
	},
};

export default grammar;
