import { TMGrammarScope } from '../types';

export const funcDeclaration: TMGrammarScope = {
	begin: /(?<=\b)(func)\s*([_a-zA-Z][_a-zA-Z0-9]*)?/,
	beginCaptures: {
		1: { name: 'storage.type.func.go' },
		2: { name: 'entity.name.function.go' },
	},
	end: /{/,
	endCaptures: {
		0: { name: 'punctuation.definition.block.begin.go' },
	},
	name: 'meta.function.signature.go',
	patterns: [{ include: '#parameters' }],
};

export const parameters: TMGrammarScope = {
	begin: /\(/,
	beginCaptures: {
		0: { name: 'punctuation.definition.parameters.begin.go' },
	},
	end: /(\))/,
	endCaptures: {
		1: { name: 'punctuation.definition.parameters.end.go' },
	},
	name: 'meta.function.parameters.go',
	patterns: [
		{ include: '#typedef' },
		{
			match: /,/,
			name: 'punctuation.separator.comma.go',
		},
	],
};

export const typedef: TMGrammarScope = {
	match: /([_a-zA-Z][_a-zA-Z0-9]*)\s+(\[\])?(\.\.\.)?(&|\*)?(?:([_a-zA-Z][_a-zA-Z0-9]*)(\.)([A-Z][_a-zA-Z0-9]*)|((?:(?:u?int|float|complex)(?:\d{1,3}|ptr))|byte|int|string|bool))/,
	captures: {
		1: { name: 'variable.other.go' },
		2: { name: 'punctuation.brace.square.go' },
		3: { name: 'keyword.operator.spread.go' },
		4: { name: 'keyword.operator.pointer.go' },
		5: { name: 'entity.name.type.module.go' },
		6: { name: 'punctuation.accessor.go' },
		7: { name: 'entity.name.type.struct.go' },
		8: { name: 'support.type.primitive.go' },
	},
};
