import { TMGrammarScope } from '../types';
import { regex } from '../utility';
import {
	ident,
	namedTypePattern as namedType,
	primTypePattern as primType,
} from '../patterns';

export const structExpr: TMGrammarScope = {
	patterns: [
		{
			match: regex`/${namedType}(?=\{)/`,
			captures: {
				1: { name: 'entity.name.type.module.go' },
				2: { name: 'punctuation.accessor.go' },
				3: { name: 'entity.name.type.struct.go' },
			},
		},
	],
};

const identCaptures = {
	1: { name: 'variable.other.go' },
	2: { name: 'keyword.operator.arrow.go' },
	3: { name: 'storage.type.chan.go' },
	4: { name: 'keyword.operator.arrow.go' },
	5: { name: 'keyword.operator.variadic.go' },
	6: { name: 'punctuation.brace.square.go' },
	7: { name: 'constant.numeric.integer.go' },
	8: { name: 'punctuation.brace.square.go' },
	9: { name: 'keyword.operator.$5.go' },
};

const slice = /(\[)([0-9]*)(\])/;
const chan = /(<-)?\s*(chan)\s*(<-)?/;
const optionals = regex`/(?:${chan}\s+)?(\.\.\.)?(?:${slice})?([&*]*)/`;

export const identifier: TMGrammarScope = {
	patterns: [
		{
			match: regex`/(${ident})\s+${optionals}${primType}/`,
			captures: {
				...identCaptures,
				10: { name: 'support.type.primitive.go' },
			},
		},
		{
			match: regex`/(${ident})\s+${optionals}(struct|interface)\s*(?=\{)/`,
			captures: {
				...identCaptures,
				10: { name: 'storage.type.$10.go' },
			},
		},
		{
			begin: regex`/(${ident})\s+(?=func)/`,
			beginCaptures: {
				1: { name: 'variable.other.go' },
			},
			end: /(?=[;\n\r])/,
			patterns: [
				{ include: '#comments' },
				{ include: '#funcDeclaration' },
			],
		},
		{
			match: regex`/(${ident})\s+${optionals}${namedType}/`,
			captures: {
				...identCaptures,
				10: { name: 'entity.name.type.module.go' },
				11: { name: 'punctuation.accessor.go' },
				12: { name: 'entity.name.type.go' },
			},
		},
		{
			match: regex`/(?<=\.)${ident}/`,
			name: 'variable.field.go',
		},
		{
			match: regex`/(${ident})(:)/`,
			captures: {
				1: { name: 'variable.field.go' },
				2: { name: 'punctuation.separator.key-value.go' },
			},
		},
		{
			match: ident,
			name: 'variable.other.go',
		},
	],
};
