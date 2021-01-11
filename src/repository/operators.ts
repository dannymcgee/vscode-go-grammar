import { TMGrammarScope } from '../types';

export const operators: TMGrammarScope = {
	patterns: [
		{
			match: /\s+([-+*\/%]=?)\s+/,
			captures: {
				1: { name: 'keyword.operator.arithmetic.$1.go' },
			},
		},
		{
			match: /(--|\+\+)\s+/,
			captures: {
				1: { name: 'keyword.operator.arithmetic.$1.go' },
			},
		},
		{
			match: /\s+(--|\+\+)/,
			captures: {
				1: { name: 'keyword.operator.arithmetic.$1.go' },
			},
		},
		{
			match: /\s+((?:<<|>>|&\^|[&|^])=?)\s+/,
			captures: {
				1: { name: 'keyword.operator.bitwise.$1.go' },
			},
		},
		{
			match: /\s+(&&|\|\||==|!=?|[<>]=?)\s+/,
			captures: {
				1: { name: 'keyword.operator.comparison.$1.go' },
			},
		},
		{
			match: /\s+(:=|=)\s+/,
			name: 'keyword.operator.assignment.go',
		},
		{
			match: /[()\[\]{}]/,
			name: 'meta.brace.go',
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
