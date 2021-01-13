import { TMGrammarScope } from '../../types';

export const varDeclaration: TMGrammarScope = {
	patterns: [
		{
			begin: /(var|const)\s+([_a-zA-Z][_a-zA-Z0-9]*)\s*/,
			beginCaptures: {
				1: { name: 'storage.type.$1.go' },
				2: { name: 'variable.other.go' },
			},
			end: /(?=[;\r\n])/,
			name: 'meta.$1.declaration.go',
			contentName: 'meta.$1.type-annotation.go',
			patterns: [
				{
					match: /(,)\s*([_a-zA-Z][_a-zA-Z0-9]*)\s*/,
					captures: {
						1: { name: 'punctuation.separator.comma.go' },
						2: { name: 'variable.other.go' },
					},
				},
				{ include: '#expression' },
				{ include: '#types' },
			],
		},
		{
			begin: /([_a-zA-Z][_a-zA-Z0-9]*)(?=[,\s])/,
			beginCaptures: {
				1: { name: 'variable.other.go' },
			},
			end: /(?=[;\r\n])/,
			name: 'meta.$1.declaration.go',
			contentName: 'meta.$1.type-annotation.go',
			patterns: [
				{
					match: /(,)\s*([_a-zA-Z][_a-zA-Z0-9]*)\s*/,
					captures: {
						1: { name: 'punctuation.separator.comma.go' },
						2: { name: 'variable.other.go' },
					},
				},
				{ include: '#expression' },
				{ include: '#types' },
			],
		},
	],
};
