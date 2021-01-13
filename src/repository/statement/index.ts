import { TMGrammarScope } from '../../types';

export * from './func-declaration';
export * from './package-declaration';
export * from './type-declaration';
export * from './var-declaration';

export * from './if-statement';
export * from './import-statement';
export * from './for-statement';

export const statement: TMGrammarScope = {
	patterns: [
		{ include: '#packageDeclaration' },
		// { include: '#importStmt' },
		{ include: '#funcDeclaration' },
		{ include: '#typeDeclaration' },
		// { include: '#ifStmt' },
		// { include: '#forStmt' },
		{ include: '#keywords' },
		{ include: '#constants' },
		{ include: '#primType' },
		{ include: '#funcName' },
		{ include: '#punctuation' },
		{ include: '#operators' },
		// { include: '#stdLib' },
		{ include: '#structExpr' },
		{ include: '#identifier' },
		{ include: '#literals' },
	],
};
