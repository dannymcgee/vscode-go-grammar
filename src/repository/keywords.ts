import { TMGrammarScope } from '../types';

export const keywords: TMGrammarScope = {
	patterns: [
		{
			match: /\b(break|case|continue|default|defer|else|fallthrough|for|go|goto|if|import|return|switch)\b/,
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
			match: /\b(range|select)\b/,
			captures: {
				1: { name: 'keyword.operator.expression.$1.go' },
			},
		},
	],
};
