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
	stdLib,
	types,
} from './repository';

const grammar: TMGrammar = {
	name: 'go',
	scopeName: 'source.go',
	patterns: [
		{ include: '#comments' },
		{ include: '#funcDeclaration' },
		{ include: '#keywords' },
		{ include: '#primType' },
		{ include: '#constants' },
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
		stdLib,
		types,
	},
};

export default grammar;
