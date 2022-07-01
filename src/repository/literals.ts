import { TMGrammarScope } from '../types';

export const constants: TMGrammarScope = {
	patterns: [
		{
			match: /\b(true|false)\b/,
			captures: {
				1: { name: 'constant.language.boolean.go' },
			},
		},
		{
			match: /\b(nil)\b/,
			captures: {
				1: { name: 'constant.language.null.go' },
			},
		},
		{
			match: /\b(iota)\b/,
			captures: {
				1: { name: 'constant.language.iota.go' },
			},
		},
	],
};

export const literals: TMGrammarScope = {
	patterns: [
		{ include: '#stringLiteral' },
		{
			// Integer
			match: /(?<=\b)(?:0[bBoOxX])?(?:_?(?:[0-9a-fA-F]+))+(?=\b)/,
			name: 'constant.numeric.integer.go',
		},
		{
			// Decimal float
			match: /(?:[0-9]+(?:[_0-9]*)?(\.)[0-9]*([eE][+-]?[_0-9]+)*)/,
			captures: {
				1: { name: 'punctuation.separator.float.go' },
			},
			name: 'constant.numeric.decimal.go',
		},
		{
			match: /(?<=\b)[0-9]+([eE][+-]?[0-9]+)(?=\b)/,
			name: 'constant.numeric.decimal.go',
		},
		{
			match: /(?<=\s+)(\.)[0-9]+([eE][+-]?[0-9]+)?(?=\b)/,
			captures: {
				1: { name: 'punctuation.separator.float.go' },
			},
			name: 'constant.numeric.decimal.go',
		},
		{
			// Hex float
			match: /(?<=\b)(?:0x)?(?:[0-9a-f]*(\.|_)?[0-9a-f]*([pe][+-]?[0-9a-f]+))(?=\b)/i,
			captures: {
				1: { name: 'punctuation.separator.float.go' },
			},
			name: 'constant.numeric.hex.go',
		},
	],
};

export const stringLiteral: TMGrammarScope = {
	patterns: [
		{
			begin: /"/,
			beginCaptures: {
				0: { name: 'punctuation.definition.string.begin.go' },
			},
			end: /(?<!\\)(")|\\\\(")/,
			endCaptures: {
				1: { name: 'punctuation.definition.string.end.go' },
				2: { name: 'punctuation.definition.string.end.go' },
			},
			name: 'string.interpreted.go',
			// prettier-ignore
			patterns: [
				{ include: '#escapes' },
				{ include: '#interpolation' },
			],
		},
		{
			begin: /`/,
			beginCaptures: {
				0: { name: 'punctuation.definition.string.begin.go' },
			},
			end: /`/,
			endCaptures: {
				0: { name: 'punctuation.definition.string.end.go' },
			},
			name: 'string.raw.go',
		},
		{
			begin: /'/,
			beginCaptures: {
				0: { name: 'punctuation.definition.string.begin.go' },
			},
			end: /(?<![\\])'|(?<=[\\]{2})'/,
			endCaptures: {
				0: { name: 'punctuation.definition.string.end.go' },
			},
			name: 'string.rune.go',
			patterns: [{ include: '#escapes' }],
		},
	],
};

export const escapes: TMGrammarScope = {
	patterns: [
		{
			match: /\\[abfnrtv\\'"]/,
			name: 'constant.character.escape.go',
		},
	],
};

export const interpolation: TMGrammarScope = {
	patterns: [
		{
			match: /%([.+#0-9]*)([vTtbcdoOqxXUbeEfFgGwsqp])/,
			captures: {
				1: { name: 'constant.numeric.template-quantifier.go' },
				2: { name: 'variable.other.go' },
			},
			name: 'meta.interpolation.go',
		},
		{
			match: /%(\[)([#0-9]+)(\])([vTtbcdoOqxXUbeEfFgGwsqp])/,
			captures: {
				1: { name: 'punctuation.bracket.go' },
				2: { name: 'constant.numeric.template-quantifier.go' },
				3: { name: 'punctuation.bracket.go' },
				4: { name: 'variable.other.go' },
			},
			name: 'meta.interpolation.go',
		},
		{
			match: /%%/,
			name: 'constant.character.escape.go',
		},
	],
};
