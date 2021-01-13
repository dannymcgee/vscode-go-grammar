import { TMGrammarScope } from '../../types';

export const ifStmt: TMGrammarScope = {
	begin: /(?:(else)?\s+(if)|(else))\s+/,
	beginCaptures: {
		1: { name: 'keyword.control.else.go' },
		2: { name: 'keyword.control.if.go' },
		3: { name: 'keyword.control.else.go' },
	},
	end: /(?=\{)/,
	patterns: [
		{ include: '#comments' },
		{ include: '#constants' },
		{ include: '#operators' },
		{ include: '#punctuation' },
		{ include: '#funcName' },
		// { include: '#stdLib' },
		{ include: '#identifier' },
		{ include: '#literals' },
	],
	name: 'meta.condition.go',
};
