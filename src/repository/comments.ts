import { TMGrammarScope } from '../types';

export const comments: TMGrammarScope = {
	patterns: [
		{
			begin: /\/\//,
			beginCaptures: {
				0: { name: 'punctuation.definition.comment.line.go' },
			},
			end: /(?=\n|\r)/,
			name: 'comment.line.go',
		},
		{
			begin: /\/\*/,
			beginCaptures: {
				0: { name: 'punctuation.definition.comment.block.begin.go' },
			},
			end: /\*\//,
			endCaptures: {
				0: { name: 'punctuation.definition.comment.block.end.go' },
			},
			name: 'comment.block.go',
		},
	],
};
