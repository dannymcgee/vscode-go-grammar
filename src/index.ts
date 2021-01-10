import { TMGrammar } from './types';

import { keywords, operators } from './repository';

const grammar: TMGrammar = {
	name: 'go',
	scopeName: 'source.go',
	patterns: [{ include: '#keywords' }, { include: '#operators' }],
	repository: {
		keywords,
		operators,
	},
};

export default grammar;
