import { TMGrammarScope } from '../types';

export const literals: TMGrammarScope = {
	patterns: [
		{
			// Strings
			begin: /"/,
			beginCaptures: {
				0: { name: 'punctuation.definition.string.begin.go' },
			},
			end: /"/,
			endCaptures: {
				0: { name: 'punctuation.definition.string.end.go' },
			},
			name: 'string.go',
		},
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
