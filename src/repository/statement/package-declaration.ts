import { TMGrammarScope } from '../../types';

export const packageDeclaration: TMGrammarScope = {
	match: /(package)\s+([_a-zA-Z][_a-zA-Z0-9]*)/,
	captures: {
		1: { name: 'storage.type.module.go' },
		2: { name: 'entity.name.type.module.go' },
	},
};
