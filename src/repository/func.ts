import { TMGrammarScope } from '../types';

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

export const funcName: TMGrammarScope = {
	match: /([_a-zA-Z][_a-zA-Z0-9]*)(?=\s*\()/,
	name: 'entity.name.function.go',
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
		{ include: '#parameter' },
		{
			match: /,/,
			name: 'punctuation.separator.comma.go',
		},
	],
};

export const parameter: TMGrammarScope = {
	patterns: [
		{
			match: /[_a-zA-Z][_a-zA-Z0-9]*(?=[,\)\r\n])/,
			name: 'variable.parameter.go',
		},
		{
			begin: /([_a-zA-Z][_a-zA-Z0-9]*)[ \t]+(\.\.\.)?/,
			beginCaptures: {
				1: { name: 'variable.paramtere.go' },
				2: { name: 'keyword.operator.variadic.go' },
			},
			end: /(?=[,\)\r\n])/,
			patterns: [{ include: '#types' }],
		},
	],
};
