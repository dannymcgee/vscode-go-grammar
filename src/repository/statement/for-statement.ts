import { TMGrammarScope } from '../../types';

export const forStmt: TMGrammarScope = {
	begin: /(for)\s+/,
	beginCaptures: {
		1: { name: 'keyword.control.for.go' },
	},
	end: /(?=\{)/,
	patterns: [
		{ include: '#comments' },
		{
			match: /\b(range)\b/,
			captures: {
				1: { name: 'keyword.operator.expression.$1.go' },
			},
		},
		{ include: '#constants' },
		{ include: '#operators' },
		{ include: '#punctuation' },
		{ include: '#funcName' },
		// { include: '#stdLib' },
		{ include: '#identifier' },
		{ include: '#literals' },
	],
	name: 'meta.loop-clause.go',
};
