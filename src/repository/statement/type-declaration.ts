import { TMGrammarScope } from '../../types';

export const typeDeclaration: TMGrammarScope = {
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
					begin: /([_a-zA-Z][_a-zA-Z0-9]*)\s*/,
					beginCaptures: {
						1: { name: 'variable.field.go' },
					},
					end: /(?=\/\/|[\r\n,;])/,
					name: 'meta.field.declaration.go',
					patterns: [{ include: '#types' }],
				},
				{
					match: /,/,
					name: 'punctuation.separator.comma.go',
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
				{
					match: /\.\.\./,
					name: 'keyword.operator.variadic.go',
				},
				{ include: '#punctuation' },
			],
		},
	],
};
