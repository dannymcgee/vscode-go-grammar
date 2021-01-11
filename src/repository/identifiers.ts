import { TMGrammarScope } from '../types';

export const identPattern = /[_a-zA-Z][_a-zA-Z0-9]*/;

export const identifiers: TMGrammarScope = {
	match: identPattern,
	name: 'variable.other.go',
};
