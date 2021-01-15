import { TMGrammarScope } from '../types';

export const funcDeclaration: TMGrammarScope = {
	patterns: [
		{
			begin: /\b(func)\s*/,
			beginCaptures: {
				1: { name: 'storage.type.func.go' },
			},
			end: /(\{)|(?=\/\/|\n|\r)/,
			endCaptures: {
				1: { name: 'punctuation.definition.block.begin.go' },
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

export const funcName: TMGrammarScope = {
	patterns: [
		{
			match: /([_a-zA-Z][_a-zA-Z0-9]*)(?=\s*\()/,
			name: 'entity.name.function.go',
		},
		{
			match: /([_a-zA-Z][_a-zA-Z0-9]*)\s*(:?=)(?=\s*func\()/,
			captures: {
				1: { name: 'entity.name.function.go' },
				2: { name: 'keyword.operator.assignment.go' },
			},
		},
	],
};

export const parameters: TMGrammarScope = {
	begin: /\(/,
	beginCaptures: {
		0: { name: 'punctuation.definition.parameters.begin.go' },
	},
	end: /\)/,
	endCaptures: {
		0: { name: 'punctuation.definition.parameters.end.go' },
	},
	name: 'meta.function.parameters.go',
	patterns: [
		{ include: '#comments' },
		{ include: '#keywords' },
		{ include: '#primType' },
		{ include: '#identifier' },
		{
			match: /,/,
			name: 'punctuation.separator.comma.go',
		},
	],
};
