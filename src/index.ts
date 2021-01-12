import { TMGrammar } from './types';

import {
	comments,
	constants,
	funcDeclaration,
	funcName,
	identifiers,
	keywords,
	literals,
	namedType,
	operators,
	parameter,
	parameters,
	primType,
	punctuation,
	stdLib,
	typeDefinition,
	types,
} from './repository';

const grammar: TMGrammar = {
	name: 'go',
	scopeName: 'source.go',
	patterns: [
		{ include: '#comments' },
		{ include: '#funcDeclaration' },
		{ include: '#typeDefinition' },
		{ include: '#keywords' },
		{ include: '#primType' },
		{ include: '#constants' },
		{ include: '#punctuation' },
		{ include: '#operators' },
		{ include: '#funcName' },
		{ include: '#stdLib' },
		{ include: '#identifiers' },
		{ include: '#literals' },
	],
	repository: {
		comments,
		constants,
		funcDeclaration,
		funcName,
		identifiers,
		keywords,
		literals,
		namedType,
		operators,
		parameter,
		parameters,
		primType,
		punctuation,
		stdLib,
		typeDefinition,
		types,
	},
};

export default grammar;
