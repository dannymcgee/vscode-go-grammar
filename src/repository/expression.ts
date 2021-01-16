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
			begin: /(:?=)?\s*([&*])?(?:(\[)([0-9]*)(\]))?(?:([_a-zA-Z][_a-zA-Z0-9]*)(\.))?([_a-zA-Z][_a-zA-Z0-9]*)(\{)/,
			beginCaptures: {
				1: { name: 'keyword.operator.assignment.go' },
				2: { name: 'keyword.operator.$2.go' },
				3: { name: 'punctuation.brace.square.go' },
				4: { name: 'constant.numeric.integer.go' },
				5: { name: 'punctuation.brace.square.go' },
				6: { name: 'entity.name.type.module.go' },
				7: { name: 'punctuation.accessor.go' },
				8: { name: 'entity.name.type.struct.go' },
				9: { name: 'punctuation.definition.struct.begin.go' },
			},
			end: /}/,
			endCaptures: {
				0: { name: 'punctuation.definition.struct.end.go' },
			},
			contentName: 'meta.struct.body.go',
			patterns: [
				{ include: '#comments' },
				{
					match: regex`/(${ident})(:)/`,
					captures: {
						1: { name: 'variable.field.go' },
						2: { name: 'punctuation.separator.key-value.go' },
					},
				},
				{ include: '#funcDeclaration' },
				{ include: '#keywords' },
				{ include: '#constants' },
				{ include: '#primType' },
				{ include: '#funcName' },
				{ include: '#punctuation' },
				{ include: '#operators' },
				{ include: '#structExpr' },
				{ include: '#identifier' },
				{ include: '#literals' },
			],
		},
	],
};

const slice = /(\[)([0-9]*)(\])/;
const chan = /(<-)?\s*(chan)\s*(<-)?/;
const optionals = regex`/(?:${chan}\s+)?(\.\.\.)?(?:${slice})?([&*]*)/`;

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
			match: ident,
			name: 'variable.other.go',
		},
	],
};
