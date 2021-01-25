import { TMGrammarScope } from '../types';

export const keywords: TMGrammarScope = {
	patterns: [
		{
			match: /\b(break|case|continue|default|defer|else|fallthrough|for|go|goto|if|import|return|switch|select)\b/,
			captures: {
				1: { name: 'keyword.control.$1.go' },
			},
		},
		{
			match: /\b(chan|const|func|interface|map|package|struct|type|var)\b/,
			captures: {
				1: { name: 'storage.type.$1.go' },
			},
		},
		{
			match: /\b(range)\b/,
			captures: {
				1: {
					name:
						'keyword.operator.expression.range.go ' +
						'storage.type.range.go',
				},
			},
		},
	],
};
