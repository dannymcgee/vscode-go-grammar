import { expect, beforeAll } from '@jest/globals';
import { OnigScanner, OnigString, loadWASM } from 'vscode-oniguruma';
import * as tm from 'vscode-textmate';
import * as path from 'path';
import * as fs from 'fs';

import tsGrammar from '../..';
import { TMGrammar } from '../../types';

type GoCode = string;
interface AnnotatedLine {
	src: string;
	tokens: tm.IToken[];
}

let grammar: tm.IGrammar;

beforeAll(async () => {
	let rawGrammar = processGrammar(tsGrammar);

	const wasmBin = fs.readFileSync(
		path.resolve(
			process.cwd(),
			'node_modules/vscode-oniguruma/release/onig.wasm',
		),
	).buffer;

	const onigLib = loadWASM(wasmBin).then(() => ({
		createOnigScanner: (patterns: string[]) => new OnigScanner(patterns),
		createOnigString: (str: string) => new OnigString(str),
	}));

	const registry = new tm.Registry({
		onigLib,
		// prettier-ignore
		loadGrammar: (scope) => new Promise((resolve, reject) => {
			if (scope !== 'source.go')
				reject(`Expected 'source.go', received '${scope}'`);
			resolve(rawGrammar);
		}),
	});

	grammar = await registry.loadGrammar('source.go');
});

expect.addSnapshotSerializer({
	serialize(val: GoCode): string {
		let tokens = getVSCodeTokens(val);
		let result: string[] = tokens.reduce((accum, line) => {
			accum.push('> ' + line.src);
			if (line.src.trim().length) {
				line.tokens.forEach((token) => {
					accum.push(
						'# ' +
							' '.repeat(token.startIndex) +
							'^'.repeat(token.endIndex - token.startIndex) +
							' ' +
							token.scopes.join(' '),
					);
				});
			}
			return accum;
		}, []);

		return '\n' + result.join('\n');
	},

	test(val: unknown): val is GoCode {
		return true; // Just use this serializer for all snapshots
	},
});

function getVSCodeTokens(source: string): AnnotatedLine[] {
	if (!grammar)
		throw new Error(`Tried to get tokens but there's no grammar!`);

	let ruleStack: tm.StackElement | null = null;
	return source.split(/\r\n|\n/).map((line: string) => {
		let result = grammar.tokenizeLine(line, ruleStack);
		ruleStack = result.ruleStack;

		return {
			src: line,
			tokens: result.tokens,
		};
	});
}

function processGrammar(grammar: TMGrammar): tm.IRawGrammar {
	let processed: tm.IRawGrammar = {} as any;

	for (let [key, value] of Object.entries(grammar)) {
		if (typeof value === 'string') {
			processed[key] = value;
		} else if (value instanceof RegExp) {
			let source = value.source;
			let flags = value.flags;
			processed[key] = (flags ? `(?${flags})` : '') + source;
		} else if (value instanceof Array) {
			processed[key] = value.map(processGrammar);
		} else {
			processed[key] = processGrammar(value);
		}
	}

	return processed;
}
