import { TMGrammarScope } from '../types';

export const types: TMGrammarScope = {
	patterns: [{ include: '#primType' }, { include: '#namedType' }],
};

export const primType: TMGrammarScope = {
	match: /\b((?:(?:u?int|float|complex)(?:\d{1,3}|ptr))|byte|int|string|bool|error)\b/,
	captures: {
		1: { name: 'support.type.primitive.go' },
	},
};

export const namedType: TMGrammarScope = {
	patterns: [
		{
			match: /(?:([_a-zA-Z][_a-zA-Z0-9]*)(\.))?([_a-zA-Z][_a-zA-Z0-9]*)/,
			captures: {
				1: { name: 'entity.name.type.module.go' },
				2: { name: 'punctuation.accessor.go' },
				3: { name: 'entity.name.type.struct.go' },
			},
		},
		{
			match: /&/,
			name: 'keyword.operator.reference.go',
		},
		{
			match: /\*/,
			name: 'keyword.operator.pointer.go',
		},
		{
			match: /(\[)([0-9]*)(\])/,
			captures: {
				1: { name: 'punctuation.brace.square.go' },
				2: { name: 'constant.numeric.integer.go' },
				3: { name: 'punctuation.brace.square.go' },
			},
		},
	],
};

export const typeDefinition: TMGrammarScope = {
	patterns: [
		{
			begin: /(?:(type)\s+([_a-zA-Z][_a-zA-Z0-9]*)\s+)?(struct)\s*(\{)/,
			beginCaptures: {
				1: { name: 'storage.type.type.go' },
				2: { name: 'entity.name.type.struct.go' },
				3: { name: 'storage.type.struct.go' },
				4: { name: 'punctuation.definition.block.begin.go' },
			},
			end: /}/,
			endCaptures: {
				0: { name: 'punctuation.definition.block.end.go' },
			},
			name: 'meta.struct.go',
			patterns: [
				{ include: '#comments' },
				{
					begin: /([_a-zA-Z][_a-zA-Z0-9]*)\s+/,
					beginCaptures: {
						1: { name: 'variable.field.go' },
					},
					end: /[\r\n,;]|(?=\/\/)/,
					name: 'meta.field.declaration.go',
					patterns: [{ include: '#types' }],
				},
			],
		},
		{
			begin: /(?:(type)\s+([_a-zA-Z][_a-zA-Z0-9]*)\s+)?(interface)\s*(\{)/,
			beginCaptures: {
				1: { name: 'storage.type.interface.go' },
				2: { name: 'entity.name.type.interface.go' },
				3: { name: 'storage.type.interface.go' },
				4: { name: 'punctuation.definition.block.begin.go' },
			},
			end: /}/,
			endCaptures: {
				0: { name: 'punctuation.definition.block.end.go' },
			},
			name: 'meta.interface.go',
			patterns: [
				{ include: '#comments' },
				{ include: '#funcName' },
				{ include: '#types' },
			],
		},
	],
};
