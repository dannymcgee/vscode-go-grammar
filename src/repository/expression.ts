import { TMGrammarScope } from '../types';
import { regex } from '../utility';

export const expression: TMGrammarScope = {
	patterns: [{ include: '#assignmentExpr' }],
};

export const assignmentExpr: TMGrammarScope = {
	begin: /:?=/,
	beginCaptures: {
		0: { name: 'keyword.operator.assignment.go' },
	},
	end: /(?=[;\n\r])/,
	name: 'meta.assignment.go',
	patterns: [{ include: '#valueExpr' }],
};

export const valueExpr: TMGrammarScope = {
	patterns: [
		{ include: '#comments' },
		{ include: '#structExpr' },
		{ include: '#operators' },
		{ include: '#punctuation' },
		{ include: '#funcName' },
		{ include: '#stdLib' },
		{ include: '#identifier' },
		{ include: '#literals' },
	],
};

export const structExpr: TMGrammarScope = {
	patterns: [
		{
			// FIXME: Won't match if there's a space before the opening brace
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
			patterns: [{ include: '#structInitBody' }],
		},
	],
};

export const structInitBody: TMGrammarScope = {
	patterns: [
		{
			begin: /([_a-zA-Z][_a-zA-Z0-9]*)(:)/,
			beginCaptures: {
				1: { name: 'variable.field.go' },
				2: { name: 'punctuation.separator.key-value.go' },
			},
			end: /(?=[,\r\n}])/,
			patterns: [
				{ include: '#keywords' },
				{ include: '#constants' },
				{ include: '#primType' },
				{ include: '#funcName' },
				{ include: '#punctuation' },
				{ include: '#operators' },
				{ include: '#identifier' },
				{ include: '#literals' },
			],
			name: 'meta.struct.field-init.go',
		},
		{ include: '#punctuation' },
	],
};

const ident = /[_a-zA-Z][_a-zA-Z0-9]*/;
const ptr = /[&*]/;
const slice = /(\[)([0-9]*)(\])/;
const primType = /\b((?:(?:u?int|float|complex)(?:\d{1,3}|ptr))|byte|int|string|bool|error)\b/;
const namedType = regex`/(?:(${ident})(\\.))?(${ident})/`;

export const identifier: TMGrammarScope = {
	patterns: [
		{
			match: regex`/(${ident})\\s+(?:${slice})?(${ptr}*)${primType}/`,
			captures: {
				1: { name: 'variable.other.go' },
				2: { name: 'punctuation.brace.square.go' },
				3: { name: 'constant.numeric.integer.go' },
				4: { name: 'punctuation.brace.square.go' },
				5: { name: 'keyword.operator.$5.go' },
				6: { name: 'support.type.primitive.go' },
			},
		},
		{
			match: regex`/(${ident})\\s+(?:${slice})?(${ptr}*)${namedType}/`,
			captures: {
				1: { name: 'variable.other.go' },
				2: { name: 'punctuation.brace.square.go' },
				3: { name: 'constant.numeric.integer.go' },
				4: { name: 'punctuation.brace.square.go' },
				5: { name: 'keyword.operator.$5.go' },
				6: { name: 'entity.name.type.module.go' },
				7: { name: 'punctuation.accessor.go' },
				8: { name: 'entity.name.type.struct.go' },
			},
		},
		{
			match: regex`/(?<=\\.)${ident}/`,
			name: 'variable.field.go',
		},
		{
			match: ident,
			name: 'variable.other.go',
		},
	],
};
