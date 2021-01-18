import { TMGrammarScope } from '../types';

export const operators: TMGrammarScope = {
	patterns: [
		{
			match: /<-/,
			name: 'keyword.operator.arrow.go',
		},
		{
			match: /(--|\+\+)/,
			captures: {
				1: { name: 'keyword.operator.arithmetic.$1.go' },
			},
		},
		{
			match: /([-+*\/%]=?)/,
			captures: {
				1: { name: 'keyword.operator.arithmetic.$1.go' },
			},
		},
		{
			match: /((?:<<|>>|&\^|[&|^])=?)/,
			captures: {
				1: { name: 'keyword.operator.bitwise.$1.go' },
			},
		},
		{
			match: /(&&|\|\||==|[!<>]=?)/,
			captures: {
				1: { name: 'keyword.operator.comparison.$1.go' },
			},
		},
		{
			match: /(:=|=)/,
			name: 'keyword.operator.assignment.go',
		},
	],
};

export const punctuation: TMGrammarScope = {
	patterns: [
		{
			match: /[()]/,
			name: 'punctuation.brace.round.go',
		},
		{
			match: /[\[\]]/,
			name: 'punctuation.brace.square.go',
		},
		{
			match: /[{}]/,
			name: 'punctuation.brace.curly.go',
		},
		{
			match: /,/,
			name: 'punctuation.separator.comma.go',
		},
		{
			match: /:/,
			name: 'punctuation.separator.key-value.go',
		},
		{
			match: /\./,
			name: 'punctuation.accessor.go',
		},
		{
			match: /;/,
			name: 'punctuation.terminator.go',
		},
	],
};
