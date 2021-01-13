import { TMGrammarScope } from '../../types';

export const importStmt: TMGrammarScope = {
	patterns: [
		{
			begin: /(import)\s*(\()/,
			beginCaptures: {
				1: { name: 'keyword.control.import.go' },
				2: { name: 'punctuation.definition.imports.begin.go' },
			},
			end: /\)/,
			endCaptures: {
				0: { name: 'punctuation.definition.imports.end.go' },
			},
			name: 'meta.import.go',
			// prettier-ignore
			patterns: [
				{ include: '#comments' },
				{ include: '#stringLiteral' },
			],
		},
		{
			begin: /(import)\s+/,
			beginCaptures: {
				1: { name: 'keyword.control.import.go' },
			},
			end: /(?=[;\r\n])/,
			name: 'meta.import.go',
			// prettier-ignore
			patterns: [
				{ include: '#comments' },
				{ include: '#stringLiteral' },
			],
		},
	],
};
