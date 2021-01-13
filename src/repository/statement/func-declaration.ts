import { TMGrammarScope } from '../../types';

export const funcDeclaration: TMGrammarScope = {
	patterns: [
		{
			begin: /\b(func)\s*/,
			beginCaptures: {
				1: { name: 'storage.type.func.go' },
			},
			end: /\{/,
			endCaptures: {
				0: { name: 'punctuation.definition.block.begin.go' },
			},
			name: 'meta.function.signature.go',
			patterns: [
				{ include: '#funcName' },
				{ include: '#parameters' },
				{ include: '#types' },
			],
		},
	],
};
